import { FormArray, FormControl } from "@angular/forms";





export function createIngredientArray( defaultList? : string[] ) : FormArray< FormControl< string | null > > {



    const list : FormArray< FormControl< string | null > > = new FormArray< FormControl< string | null > >([]);

    if( defaultList ) { defaultList.forEach( a => list.push( new FormControl< string | null >( a ) ) ); }



    return list;


    
}