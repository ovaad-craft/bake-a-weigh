import { FormControl } from "@angular/forms";
import { ExtractType } from "@bake-a-weigh/site-types";





export function createExtractType( defaultType? : ExtractType ) : FormControl< ExtractType | null > {



    return new FormControl< ExtractType | null >( defaultType ?? null );


    
}