import path = require("path");
import ts = require("typescript");
import * as fs from 'fs';
import { ComponentInjectionSpecs } from "../schema";
import { ProjectConfiguration } from "@nx/devkit";




export class OvaadFileWriter {

    Project! : ProjectConfiguration;





    constructor( public project : ProjectConfiguration ) { this.Project = project; }


    
    
    
    //  For finding nodes inside the project.
    scanNode< NodeType extends ts.Node, ItemType extends ts.Node >( source : NodeType, typePredicate : ( node : ts.Node ) => node is ItemType ) : ItemType[] {

        const nodeList : ItemType[] = [];

        function scan( node : ts.Node ) : void {
            
            if( typePredicate( node ) ) { nodeList.push( node ); }

            ts.forEachChild( node, scan )
        }

        scan( source );

        return nodeList;

    }



    //  Create new Import declaration item.
    createNewImportDecalarationItem( item : string ) : ts.ImportSpecifier {

        return ts.factory.createImportSpecifier(

            false,
            undefined,
            ts.factory.createIdentifier( item )

        );

    }





    //  Create new Import declaration
    createNewImportDeclaration( item : string, location : string ) : ts.ImportDeclaration {

        const newItem      : ts.ImportSpecifier = this.createNewImportDecalarationItem( item );
        const itemList     : ts.NamedImports    = ts.factory.createNamedImports( [ newItem ] );
        const importClause : ts.ImportClause    = ts.factory.createImportClause( false, undefined, itemList );

        return ts.factory.createImportDeclaration(

            undefined,
            importClause,
            ts.factory.createStringLiteral( location ),
            undefined

        );

    }





    //  Add to existing import declaration.
    addToExistingImportDeclaration( newItem : string, declaration : ts.ImportDeclaration ) : ts.ImportDeclaration {

        const newItemSpecifier : ts.ImportSpecifier = this.createNewImportDecalarationItem( newItem );
        const bindings = declaration.importClause?.namedBindings;
        
        if( bindings && ts.isNamedImports( bindings ) ) {
            
            const newList = [...bindings.elements, newItemSpecifier ];
           
           return ts.factory.createImportDeclaration(
   
               undefined,
               ts.factory.createImportClause( false, undefined, ts.factory.createNamedImports( newList ) ),
               declaration.moduleSpecifier,
               undefined
               
           );

        }

        throw new Error("Something went wrong with updating import declaration.");
        

    }





    //  Create new item for import array.
    createNewImportArrayItem( item : string ) : ts.Identifier {

        return ts.factory.createIdentifier( item );

    }





    //  Get Component metadata
    getComponentMetadata( className : ts.ClassDeclaration ) : ts.Decorator | undefined {

        const decorators = ts.getDecorators( className ) as ts.Decorator[];

        return decorators?.find( ( a : ts.Decorator ) => {

            const expression = a.expression          as ts.CallExpression;
            const identifier = expression.expression as ts.Identifier;

            return identifier.text === 'Component';

        });

    }





    // Create import path to new component
    createImportPath( parentPath : string, childPath : string ) : string {

        const relativePath = path.relative( path.dirname( parentPath ), childPath );

        return relativePath.startsWith('.') ? relativePath : `./${ relativePath }`;

    }





    findComponentFile(projectConfig: ProjectConfiguration, componentName: string): string | undefined {

        const sourceRoot = projectConfig.sourceRoot;

        if ( !sourceRoot ) return undefined;
        
        
        //const files = fs.readdirSync(sourceRoot);

        function findFileRecursively(dir: string): string | undefined {
            const entries = fs.readdirSync(dir, { withFileTypes: true });
    
            for (const entry of entries) {
                const fullPath = path.join(dir, entry.name);
    
                if (entry.isDirectory()) {
                    const found = findFileRecursively(fullPath);
                    if (found) return found;
                } else if (entry.isFile() && entry.name.endsWith('.component.ts') && entry.name.includes(componentName)) {
                    return fullPath;
                }
            }
    
            return undefined;
        }
    
        return findFileRecursively(sourceRoot);
    }





    //  Find component in project
    /*findComponentInProject( name : string ) : ts.ClassDeclaration | undefined {

        const nodes = this.scanNode< ts.SourceFile, ts.ClassDeclaration >( this.Project, ts.isClassDeclaration );

        return nodes.find( node => node.name?.text === name && this.getComponentMetadata( node ) );
    
    }*/





    //  Check if import path already exists
    checkIfPathExist( source : ts.SourceFile, importPath : string ) : ts.ImportDeclaration | undefined {

        const declarations = this.scanNode<ts.SourceFile, ts.ImportDeclaration>( source, ts.isImportDeclaration );

        return declarations.find( declaration => {

            const specifier = ( declaration.moduleSpecifier as ts.StringLiteral ).text;

            return specifier === importPath;

        });

    }





    parseComponentFile(filePath: string): { sourceFile: ts.SourceFile, classNode: ts.ClassDeclaration | undefined, decoratorNode: ts.Decorator | undefined } {
        const sourceFile = ts.createSourceFile(
            filePath,
            fs.readFileSync(filePath, 'utf-8'),
            ts.ScriptTarget.Latest,
            true
        );
    
        let classNode: ts.ClassDeclaration | undefined;
        let decoratorNode: ts.Decorator | undefined;
    
        ts.forEachChild(sourceFile, node => {
            if (ts.isClassDeclaration(node) && ts.getDecorators(node)) {
                const decorators = ts.getDecorators( node ) ?? [];

                classNode = node;

                decoratorNode = decorators.find(decorator =>
                    ts.isCallExpression(decorator.expression) &&
                    ts.isIdentifier(decorator.expression.expression) &&
                    decorator.expression.expression.text === 'Component'
                );
            }
        });
    
        return { sourceFile, classNode, decoratorNode };
    }





    //  Add new component to existing component
    addNewComponentToComponent( parentComponent : string, childComponent : ComponentInjectionSpecs ) : ts.Node | undefined {

        //const parent : ts.ClassDeclaration | undefined = this.findComponentInProject( parentComponent );
        const parentFilePath = this.findComponentFile( this.Project, parentComponent );

        if ( parentFilePath === undefined ){ console.error( `Path for ${parentComponent} not found.` ) }

        const parentFile = this.parseComponentFile( parentFilePath! );

        if( parentFile === undefined ) {
            
            console.error( `${ parentComponent } not found in project.` );
        }

        //console.log(`parentFile : ${parentFilePath}`);



        


        
        
        const updatedImportDeclarationList : ts.ImportDeclaration[] = [];
        const updatedDecoratorImportArray  : ts.Identifier[]        = [];
        let   updatedTemplateFile          = '';




        const declarationList : ts.ImportDeclaration[] | undefined = this.scanNode< ts.SourceFile, ts.ImportDeclaration >( parentFile.sourceFile, ts.isImportDeclaration );
        let addedToExistingPath = false;


        declarationList.forEach( a => {

            const checker : boolean = ( a.moduleSpecifier as ts.StringLiteral ).text  === childComponent.componentPath ? true : false;

            if( checker ) {


                
                const bindings = a.importClause?.namedBindings;

                if( bindings && ts.isNamedImports( bindings ) ) {

                
                    const newImportSpecifiers : ts.ImportSpecifier[] = [ ...bindings.elements, this.createNewImportDecalarationItem( childComponent.componentClassName ) ];

                    updatedImportDeclarationList.push(
                        ts.factory.createImportDeclaration(
                            a.modifiers?? undefined,
                            ts.factory.createImportClause( false, undefined, ts.factory.createNamedImports( newImportSpecifiers ) ),
                            a.moduleSpecifier?? undefined,
                            undefined
                        )
                    );

                    addedToExistingPath = true;


                }



            }

            else { updatedImportDeclarationList.push( a ); }


        });

        if( !addedToExistingPath ) {

           updatedImportDeclarationList.push(

            ...declarationList,
            this.createNewImportDeclaration( childComponent.componentClassName, childComponent.componentPath )

          );


        }




        if( parentFile.decoratorNode && ts.isCallExpression( parentFile.decoratorNode.expression ) ) {

            const decoratorMetadata = ( parentFile.decoratorNode.expression as ts.CallExpression ).arguments[ 0 ] as ts.ObjectLiteralExpression;
            const metadataImports   = decoratorMetadata.properties.find( a =>

                ts.isPropertyAssignment( a ) &&
                ts.isIdentifier( a.name )    &&
                a.name.text === 'imports'

            ) as ts.PropertyAssignment;



            if ( metadataImports ) {

                const metadataImportsArray = metadataImports.initializer as ts.ArrayLiteralExpression;

                const updatedImportsArray = ts.factory.createArrayLiteralExpression([

                    ...metadataImportsArray.elements,
                    this.createNewImportArrayItem( childComponent.componentClassName )

                ]);



                updatedImportsArray.forEachChild( a => updatedDecoratorImportArray.push( a as ts.Identifier ) );


            }


        }



        const parentPath : string | undefined = parentFile.sourceFile.fileName;
        const parentTemplatePath : string = parentPath ? parentPath.replace( /\.ts$/, '.html' ) : '';

        if ( parentTemplatePath !== '' ) {

            const parentTemplateFile = fs.readFileSync( parentTemplatePath, 'utf-8' );
            const templateLines : string[] = parentTemplateFile.split( '\n' );

            if ( childComponent.removeCode ) {

                const newTemplateLines : string[] = [

                    ...templateLines.slice( 0, childComponent.removeCode.start -1 ),
                    childComponent.templateItem,
                    ...templateLines.slice( childComponent.removeCode.end )

                ];

                updatedTemplateFile = newTemplateLines.join( '\n' );

            }

            else {

                if ( childComponent.insertAt ) {

                    const newTemplateLines : string[] = [

                        ...templateLines.slice( 0, childComponent.insertAt - 2 ),
                        childComponent.templateItem,
                        ...templateLines.slice( childComponent.insertAt - 1 )

                    ];

                    updatedTemplateFile = newTemplateLines.join( '\n' );

                }
            }

        }



        if ( parentFile !== undefined && ts.isClassDeclaration( parentFile.classNode! ) ) {

            const updatedClassDeclaration = ts.factory.createClassDeclaration(
    
                parentFile.classNode.modifiers,
                parentFile.classNode.name,
                parentFile.classNode.typeParameters,
                parentFile.classNode.heritageClauses,
                [
                    ...parentFile.classNode!.members,
                    //...updatedImportDeclarationList,
                    ...updatedDecoratorImportArray.map(identifier => ts.factory.createPropertyDeclaration(
                        [ ts.factory.createModifier( ts.SyntaxKind.StaticKeyword ) ],
                        ts.factory.createIdentifier(identifier.text),
                        undefined,
                        undefined,
                        undefined
                    )),
                    ts.factory.createMethodDeclaration(
                        undefined,
                        undefined,
                        'template',
                        undefined,
                        undefined,
                        [],
                        undefined,
                        ts.factory.createBlock([
                            ts.factory.createReturnStatement(
                                ts.factory.createStringLiteral( updatedTemplateFile )
                            )
                        ])
                    )
                ]
    
            );

            const allUpdatedItems = [
                ...updatedImportDeclarationList,
                updatedClassDeclaration
            ];

            const printer = ts.createPrinter();
            const updatedSourceText = printer.printList(
            ts.ListFormat.MultiLine,
            ts.factory.createNodeArray(allUpdatedItems),
            parentFile.sourceFile
            );

            const updatedSourceFile = ts.createSourceFile(
                parentPath,
                updatedSourceText,
                ts.ScriptTarget.Latest,
                true,
                ts.ScriptKind.TS
            );

            return updatedSourceFile;
        }


    }
}