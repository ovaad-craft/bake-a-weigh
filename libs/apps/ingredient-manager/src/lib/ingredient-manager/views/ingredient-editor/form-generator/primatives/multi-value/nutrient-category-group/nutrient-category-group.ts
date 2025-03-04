import { FormControl, FormGroup }           from "@angular/forms";
import { NutrientCategory }                 from "@bake-a-weigh/site-types";
import { NutrientCategoryGroup }            from "../../../form-types";
import { createElementWeightGroup }         from "../element-weight-group/element-weight-group";
import { createNutrientCategoryGroupArray } from "../nutrient-category-group-array/nutrient-category-group-array";





export function createNutrientCategoryGroup( defaultData? : NutrientCategory ) : FormGroup< NutrientCategoryGroup > {



    return new FormGroup< NutrientCategoryGroup >({

        name        : new FormControl< string | null >( defaultData?.name      ? defaultData.name        : null      ),
        totalAmount : createElementWeightGroup(         defaultData            ? defaultData.totalAmount : undefined ),
        nutrients   : createNutrientCategoryGroupArray( defaultData?.nutrients ? defaultData.nutrients   : undefined )

    });



}