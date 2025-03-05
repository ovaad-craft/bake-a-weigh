import { FormArray, FormControl } from "@angular/forms";





export function createLocationsArray( defaultLocations? : string[] ) : FormArray< FormControl< string | null > > {



    const list : FormArray< FormControl< string | null > > = new FormArray< FormControl< string | null > >([]);

    if( defaultLocations ) { defaultLocations.forEach( a => list.push( new FormControl< string | null >( a ) ) ); }



    return list;


    
}