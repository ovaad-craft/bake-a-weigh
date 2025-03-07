import { FormControl } from "@angular/forms";
import { ProduceType } from "@bake-a-weigh/site-types";





export function createProduceTypeControl( defaultProduceType? : ProduceType ) : FormControl< ProduceType | null > {



    return new FormControl< ProduceType | null >( defaultProduceType ?? null );


    
}