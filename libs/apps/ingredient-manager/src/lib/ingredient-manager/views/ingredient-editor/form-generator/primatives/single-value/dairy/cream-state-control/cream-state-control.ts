import { FormControl } from "@angular/forms";
import { CreamState }  from "@bake-a-weigh/site-types";





export function createCreamStateControl( defaultCreamState ? : CreamState ) : FormControl< CreamState | null > {



    return new FormControl< CreamState | null >( defaultCreamState ?? null );



}