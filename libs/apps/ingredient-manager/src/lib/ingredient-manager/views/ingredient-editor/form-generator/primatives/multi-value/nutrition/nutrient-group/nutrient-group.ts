import { Nutrient }               from "@bake-a-weigh/site-types";
import { NutrientGroupType }      from "../../../../form-types";
import { FormControl, FormGroup } from "@angular/forms";
import { createWeightControl }    from "../../../single-value/measurements/weight-control/weight-control";





export function createNutrientGroup( defaultGroup? : Nutrient ) : FormGroup< NutrientGroupType > {



    return new FormGroup< NutrientGroupType >({

        name       : new FormControl< string | null >( defaultGroup ? defaultGroup.name   : null ),
        amount     : new FormControl< number | null >( defaultGroup ? defaultGroup.amount : null ),

        weightType : createWeightControl( defaultGroup ? defaultGroup.weightType : undefined ),

        percentage : ( defaultGroup?.percentage ?
                        new FormControl< number | null >( defaultGroup.percentage ) : undefined
                     )

    });



}