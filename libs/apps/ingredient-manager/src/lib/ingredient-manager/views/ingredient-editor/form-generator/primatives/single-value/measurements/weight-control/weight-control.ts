import { FormControl } from "@angular/forms";
import { WeightType }  from "@bake-a-weigh/site-types";





export function createWeightControl( defaultWeight? : WeightType ) : FormControl< WeightType | null > {



    return new FormControl< WeightType | null >(defaultWeight ?? null );



}