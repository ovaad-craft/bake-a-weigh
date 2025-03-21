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

        const relativePath = path.relative( path.dirname( path.normalize( parentPath )), path.normalize(childPath) );

        const formattedPath = relativePath.replace(/\\/g, '/')

        return formattedPath.startsWith('.') ? formattedPath : `./${ formattedPath }`;

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



    createNewModifierArray( list : ts.NodeArray<ts.ModifierLike> | undefined, newItem : ts.ModifierLike ) : ts.ModifierLike[] {

        const newList : ts.ModifierLike[] = [ newItem ];

        list?.forEach( a => {

            if( ts.SyntaxKind[ a.kind ] !== ts.SyntaxKind[ newItem.kind ] ) {
                newList.push( a );
            }

        });

        return newList;

    }





    //  Add new component to existing component
    addNewComponentToComponent( insertionData : ComponentInjectionSpecs, parentComponent? : string, childComponent? : ComponentInjectionSpecs ) : { newFile : ts.SourceFile, path: string } | undefined {

        //const parent : ts.ClassDeclaration | undefined = this.findComponentInProject( parentComponent );
        const parentFilePath = this.findComponentFile( this.Project, insertionData.parentComponentFileName );

        if ( parentFilePath === undefined ){ console.error( `Path for ${parentComponent} not found.` ) }

        const parentFile = this.parseComponentFile( parentFilePath! );

        if( parentFile === undefined ) {
            
            console.error( `${ parentComponent } not found in project.` );
        }

        //console.log(parentFile.classNode?.modifiers?.map( a => ts.SyntaxKind[a.kind]));



        


        
        
        const updatedImportDeclarationList : ts.ImportDeclaration[] = [];
        const updatedDecoratorImportArray  : ts.Identifier[]        = [];
        let newComponentDecorator : ts.Decorator;
        let originalDecoratorMetadata;
        let   updatedTemplateFile          = '';




        const declarationList : ts.ImportDeclaration[] | undefined = this.scanNode< ts.SourceFile, ts.ImportDeclaration >( parentFile.sourceFile, ts.isImportDeclaration );
        let addedToExistingPath = false;

        //console.log(childComponent.componentPath);


        declarationList.forEach( a => {

            const checker : boolean = ( a.moduleSpecifier as ts.StringLiteral ).text  === insertionData.childComponentPath ? true : false;

            if( checker ) {


                
                const bindings = a.importClause?.namedBindings;

                if( bindings && ts.isNamedImports( bindings ) ) {

                    //console.log(childComponent.componentClassName);

                
                    const newImportSpecifiers : ts.ImportSpecifier[] = [ ...bindings.elements, this.createNewImportDecalarationItem( insertionData.parentComponentClassName ) ];

                    //if(childComponent.componentClassName === 'tester-parent'){ console.log( newImportSpecifiers)}

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

        //console.log(declarationList);

        if( !addedToExistingPath ) {

            const pathToChild : string = this.createImportPath( parentFilePath!, insertionData.childComponentPath );

           updatedImportDeclarationList.push(

            //...declarationList,
            this.createNewImportDeclaration( insertionData.childComponentClassName, pathToChild )

          );


        }

        //console.log(updatedImportDeclarationList)




        if( parentFile.decoratorNode && ts.isCallExpression( parentFile.decoratorNode.expression ) ) {

            const decoratorMetadata = ( parentFile.decoratorNode.expression as ts.CallExpression ).arguments[ 0 ] as ts.ObjectLiteralExpression;

            originalDecoratorMetadata = decoratorMetadata;

            const metadataImports   = decoratorMetadata.properties.find( a =>

                ts.isPropertyAssignment( a ) &&
                ts.isIdentifier( a.name )    &&
                a.name.text === 'imports'

            ) as ts.PropertyAssignment;

            //console.log(metadataImports);

            const newImportArrayItems : ts.Identifier[] = [];



            if ( metadataImports ) {

                //console.log('inside condition')

                const metadataImportsArray = metadataImports.initializer as ts.ArrayLiteralExpression;

                const updatedImportsArray = ts.factory.createArrayLiteralExpression([

                    ...metadataImportsArray.elements,
                    this.createNewImportArrayItem( insertionData.childComponentClassName )

                ]);

                //console.log(updatedImportsArray)



                updatedImportsArray.elements.forEach( a => newImportArrayItems.push( a as ts.Identifier ) );

                //console.log( updatedDecoratorImportArray );


            }

            if (!metadataImports) {
                const newImports = ts.factory.createPropertyAssignment(
                    ts.factory.createIdentifier('imports'),
                    ts.factory.createArrayLiteralExpression([])
                );

                const newList = ts.factory.updateObjectLiteralExpression(decoratorMetadata, [
                    ...decoratorMetadata.properties,
                    newImports
                ]);
            
                // Append to metadata properties
                newList.forEachChild( a => newImportArrayItems.push( a as ts.Identifier ) )
            }

            const existingProperties = decoratorMetadata.properties.filter(
                (prop) => {
                    // Ensure we keep everything except 'imports', which we are replacing
                    return ts.isPropertyAssignment(prop) && prop.name.getText() !== 'imports';
                }
            );

            
            const updatedDecorator = ts.factory.createDecorator(
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier("Component"),
                    undefined,
                    [
                        
                        // Ensure the argument is a properly structured ObjectLiteralExpression
                        ts.factory.createObjectLiteralExpression([
                            ...existingProperties,
                            ts.factory.createPropertyAssignment(
                                ts.factory.createIdentifier('imports'),
                                ts.factory.createArrayLiteralExpression(newImportArrayItems, true) // True for preserving formatting
                            ),
                            // Add other properties if needed, e.g., template, selector, etc.
                        ])
                    ]
                )
            );

            newComponentDecorator = updatedDecorator;

        }



        const parentPath : string | undefined = parentFile.sourceFile.fileName;
        const parentTemplatePath : string = parentPath ? parentPath.replace( /\.ts$/, '.html' ) : '';

        if ( parentTemplatePath !== '' ) {

            const parentTemplateFile = fs.readFileSync( parentTemplatePath, 'utf-8' );
            const templateLines : string[] = parentTemplateFile.split( '\n' );

            if ( insertionData.removeCode ) {

                const newTemplateLines : string[] = [

                    ...templateLines.slice( 0, insertionData.removeCode.start -1 ),
                    insertionData.templateItem,
                    ...templateLines.slice( insertionData.removeCode.end )

                ];

                updatedTemplateFile = newTemplateLines.join( '\n' );

            }

            else {

                if ( insertionData.insertAt ) {

                    const newTemplateLines : string[] = [

                        ...templateLines.slice( 0, insertionData.insertAt - 2 ),
                        insertionData.templateItem,
                        ...templateLines.slice( insertionData.insertAt - 1 )

                    ];

                    updatedTemplateFile = newTemplateLines.join( '\n' );

                }
            }

        }



        if ( parentFile !== undefined && ts.isClassDeclaration( parentFile.classNode! ) ) {




            const updatedImportsProperty = ts.factory.createPropertyAssignment(
                ts.factory.createIdentifier('imports'),
                ts.factory.createArrayLiteralExpression(
                    updatedDecoratorImportArray, // This is your array of identifiers
                    true // Preserve formatting
                )
            );

            const updatedMetadataProperties = originalDecoratorMetadata!.properties.map(prop => {
                if (ts.isPropertyAssignment(prop) && prop.name.getText() === 'imports') {
                    return updatedImportsProperty; // Replace old imports array
                }
                return prop;
            });

            const updatedDecorator = ts.factory.createDecorator(
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier("Component"),
                    undefined,
                    [
                        // Ensure the argument is a properly structured ObjectLiteralExpression
                        ts.factory.createObjectLiteralExpression([
                            ts.factory.createPropertyAssignment(
                                ts.factory.createIdentifier('imports'),
                                ts.factory.createArrayLiteralExpression(updatedDecoratorImportArray, true) // True for preserving formatting
                            ),
                            // Add other properties if needed, e.g., template, selector, etc.
                        ])
                    ]
                )
            );
            

            const updatedClassDeclaration = ts.factory.createClassDeclaration(
    
                [
                    
                    ...this.createNewModifierArray( parentFile.classNode.modifiers, newComponentDecorator! )
                    
                ],
                parentFile.classNode.name,
                parentFile.classNode.typeParameters,
                parentFile.classNode.heritageClauses,
                [
                    ...parentFile.classNode!.members,
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
                //newComponentDecorator!,
                updatedClassDeclaration
            ];

            const newSourceFile = ts.factory.updateSourceFile(
                parentFile.sourceFile,
                allUpdatedItems 
            );

            const printer = ts.createPrinter({
                newLine: ts.NewLineKind.LineFeed,
                removeComments : false
            });

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

            return { newFile : updatedSourceFile, path : parentFilePath! };
        }


    }
}