import { FormControl }         from "@angular/forms";
import { FlourClassification } from "@bake-a-weigh/site-types";





export function createFlourClassificationControl( defaultFlourClass? : FlourClassification) : FormControl< FlourClassification | null > {
    
    
    
    return new FormControl< FlourClassification | null >( defaultFlourClass ?? null );



}