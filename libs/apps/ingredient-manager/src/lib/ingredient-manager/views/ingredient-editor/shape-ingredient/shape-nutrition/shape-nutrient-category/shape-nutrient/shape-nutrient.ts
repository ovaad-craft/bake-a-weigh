import { FormGroup } from "@angular/forms";
import { NutrientGroupType } from "../../../../form-generator/form-types";
import { ElementWeightType, Nutrient, WeightType } from "@bake-a-weigh/site-types";




export function shapeNutrient( nutrient : FormGroup< NutrientGroupType >[ 'value' ] ) : Nutrient {

    return {
        
        name       : nutrient.name       as string,
        weightType : nutrient.weightType as WeightType,
        amount     : nutrient.amount     as number,
        percentage : nutrient.percentage as number ?? undefined

    };

}