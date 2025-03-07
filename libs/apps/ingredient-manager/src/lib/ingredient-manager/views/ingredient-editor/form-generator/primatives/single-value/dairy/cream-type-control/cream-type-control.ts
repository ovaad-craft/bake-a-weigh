import { FormControl } from "@angular/forms";
import { CreamType }   from "@bake-a-weigh/site-types";





export function createCreamTypeControl( defaultCreamType? : CreamType ) : FormControl< CreamType | null > {



    return new FormControl< CreamType | null >( defaultCreamType ?? null );



}