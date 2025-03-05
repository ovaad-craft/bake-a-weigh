import { FormControl } from "@angular/forms";
import { SugarType }   from "@bake-a-weigh/site-types";





export function createSugarTypeControl( defaultSugarType? : SugarType ) : FormControl< SugarType | null > {



    return new FormControl< SugarType >( defaultSugarType ? defaultSugarType : 'cane' );


    
}