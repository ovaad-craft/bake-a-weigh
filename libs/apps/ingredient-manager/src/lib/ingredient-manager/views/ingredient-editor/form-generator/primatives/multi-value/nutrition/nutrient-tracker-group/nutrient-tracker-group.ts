import { FormControl, FormGroup }   from "@angular/forms";
import { NutrientTracker }          from "@bake-a-weigh/site-types";
import { NutrientTrackerGroup }     from "../../../../form-types";
import { createElementWeightGroup } from "../../element-weight-group/element-weight-group";





export function createNutrientTrackerGroup( defaultSettings? : NutrientTracker ) : FormGroup< NutrientTrackerGroup > {



    return new FormGroup< NutrientTrackerGroup >({

        name        : new FormControl< string | null >( defaultSettings ? defaultSettings.name : null ),
        servingSize : createElementWeightGroup( defaultSettings ? defaultSettings.servingSize  : undefined ),
        amount      : createElementWeightGroup( defaultSettings ? defaultSettings.amount       : undefined )
        
    });



}