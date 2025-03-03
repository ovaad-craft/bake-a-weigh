import { FormControl }  from "@angular/forms";
import { ExtractState } from "@bake-a-weigh/site-types";





export function createExtractStateControl( defaultState? : ExtractState ) : FormControl< ExtractState | null > {



    return new FormControl< ExtractState >( defaultState ? defaultState : 'liquid' );



}