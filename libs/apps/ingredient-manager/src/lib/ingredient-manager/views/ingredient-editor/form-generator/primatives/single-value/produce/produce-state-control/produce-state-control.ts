import { FormControl }  from "@angular/forms";
import { ProduceState } from "@bake-a-weigh/site-types";





export function createProdueStateControl( defaultProduceState? : ProduceState ) : FormControl< ProduceState | null > {



    return new FormControl< ProduceState >( defaultProduceState ? defaultProduceState : 'fresh' );



}