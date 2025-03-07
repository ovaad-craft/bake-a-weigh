import { FormControl } from "@angular/forms";
import { FlourType }   from "@bake-a-weigh/site-types";





export function createFlourTypeControl( defaultFlourVal? : FlourType ) : FormControl< FlourType | null > {



    return new FormControl< FlourType | null >( defaultFlourVal ?? null );



}