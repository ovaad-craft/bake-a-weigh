import { FormControl, FormGroup } from "@angular/forms";
import { ElementWeightType, WeightType } from "@bake-a-weigh/site-types";





export interface ElementWeightGroupType{

    amount      : FormControl< number | null >,
    weightType  : FormControl< WeightType | null >,
    percentage? : FormControl< number | null >

}



export function createElementWeightGroup( defaultValues? : ElementWeightType ) : FormGroup< ElementWeightGroupType > {



    const group : FormGroup< ElementWeightGroupType > = new FormGroup< ElementWeightGroupType >({

        amount     : new FormControl< number | null >( defaultValues ? defaultValues.amount : null ),
        weightType : new FormControl< WeightType | null >( defaultValues ? defaultValues.weightType : null ),
        percentage : ( defaultValues?.percentage ? new FormControl< number | null >( defaultValues.percentage ) : undefined )

    });



    return group;



}