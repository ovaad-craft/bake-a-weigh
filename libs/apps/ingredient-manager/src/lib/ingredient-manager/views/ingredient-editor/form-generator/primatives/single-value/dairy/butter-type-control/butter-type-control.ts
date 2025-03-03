import { FormControl } from "@angular/forms";
import { ButterType }  from "@bake-a-weigh/site-types";





export function createButterTypeControl( defaultButterType? : ButterType ) : FormControl< ButterType | null > {



    return new FormControl< ButterType >( defaultButterType ? defaultButterType : 'unsalted' );



}