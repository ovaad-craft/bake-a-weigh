import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { FormArrayControlList } from "../../../form-types";





export function createLocationsArray( defaultLocations? : string[] ) : FormGroup< FormArrayControlList< string > > /*FormArray< FormControl< string | null > >*/ {



    const group : FormGroup< FormArrayControlList< string > > = new FormGroup({

        list : new FormArray< FormControl< string | null > >( [] )

    });

    //const list : FormArray< FormControl< string | null > > = new FormArray< FormControl< string | null > >([]);

    if( defaultLocations ) { defaultLocations.forEach( a => group.controls.list.push( new FormControl< string | null >( a ) ) ); }



    return group;


    
}