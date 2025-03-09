import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { FormArrayControlList }              from "../../../form-types";





export function createIngredientArray( defaultList? : string[] ) : FormGroup< FormArrayControlList< string > > {



    const group : FormGroup< FormArrayControlList< string > > = new FormGroup< FormArrayControlList< string > >({
        
        list : new FormArray< FormControl< string | null >>( [] )

    });



    if( defaultList ) {

        defaultList.forEach( a => group.controls.list.push( new FormControl< string | null >( a ) ) );

    }



    return group;


    
}