import { FormControl } from "@angular/forms";
import { SaltType }    from "@bake-a-weigh/site-types";





export function createSaltTypeControl( defaultSaltType? : SaltType ) : FormControl< SaltType | null > {



    return new FormControl< SaltType | null >( defaultSaltType ?? null );



}