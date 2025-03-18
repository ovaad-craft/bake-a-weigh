import path = require("path");
import ts = require("typescript");
import { ComponentInjectionSpecs } from "../schema";




export class OvaadFileWriter {

    Project! : ts.Node;





    constructor( public project : ts.Node ) { this.Project = project; }


    
    
    
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





    //  Find component in project
    findComponentInProject( name : string ) : ts.ClassDeclaration | undefined {

        const nodes = this.scanNode< ts.SourceFile, ts.ClassDeclaration >( this.Project as ts.SourceFile, ts.isClassDeclaration );

        return nodes.find( node => node.name?.text === name && this.getComponentMetadata( node ) );
    
    }





    //  Check if import path already exists
    checkIfPathExist( source : ts.SourceFile, importPath : string ) : ts.ImportDeclaration | undefined {

        const declarations = this.scanNode<ts.SourceFile, ts.ImportDeclaration>( source, ts.isImportDeclaration );

        return declarations.find( declaration => {

            const specifier = ( declaration.moduleSpecifier as ts.StringLiteral ).text;

            return specifier === importPath;

        });

    }





    //  Add new component to existing component
    addNewComponentToComponent( parentComponent : string, childComponent : ComponentInjectionSpecs ) : ts.Node {

        const parent : ts.ClassDeclaration | undefined = this.findComponentInProject( parentComponent );

        if( parent === undefined ) { console.error( `${ parentComponent } not found in project.`); }

        const location : ts.ImportDeclaration | undefined = this.checkIfPathExist( parent!.getSourceFile(), childComponent.componentPath );
        let newImportDeclaration;

        if( location ){

            const newItem : ts.ImportSpecifier = this.createNewImportDecalarationItem( childComponent.componentClassName );
            const bindings = location.importClause?.namedBindings;

            if( bindings && ts.isNamedImports( bindings ) ) {

                const newList : ts.ImportSpecifier[] = [...bindings.elements, newItem ];

                newImportDeclaration = this.createNewImportDeclaration( newList, location.moduleSpecifier );
            }

        }
    }

}