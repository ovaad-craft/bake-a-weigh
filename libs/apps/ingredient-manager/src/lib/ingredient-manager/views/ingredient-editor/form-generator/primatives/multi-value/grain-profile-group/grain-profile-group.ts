import { FormControl, FormGroup }     from "@angular/forms";
import { GrainProfile }               from "@bake-a-weigh/site-types";
import { GrainProfileGroup }          from "../../../form-types";
import { createNutrientTrackerGroup } from "../nutrient-tracker-group/nutrient-tracker-group";





export function createGrainProfileGroup( defaultProfile? : GrainProfile ) : FormGroup< GrainProfileGroup > {



    return new FormGroup< GrainProfileGroup >({

        protein       : createNutrientTrackerGroup( defaultProfile?.protein ? defaultProfile.protein : undefined ),
        maxObsorption : new FormControl< number | null >( defaultProfile?.maxObsorption ? defaultProfile.maxObsorption : null )

    });



}