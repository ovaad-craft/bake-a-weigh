import { FormControl, FormGroup }           from "@angular/forms";
import { NutrientCategory }                 from "@bake-a-weigh/site-types";
import { NutrientCategoryGroup }            from "../../../../form-types";
import { createElementWeightGroup }         from "../../element-weight-group/element-weight-group";
import { createNutrientCategoryGroupArray } from "../nutrient-category-group-list/nutrient-category-group-list";





export function createNutrientCategoryGroup( defaultData? : NutrientCategory ) : FormGroup< NutrientCategoryGroup > {



    const group : FormGroup< NutrientCategoryGroup > = new FormGroup< NutrientCategoryGroup >({

        name        : new FormControl< string | null >( defaultData?.name      ? defaultData.name        : null      ),
        totalAmount : createElementWeightGroup(         defaultData            ? defaultData.totalAmount : undefined )

    });

    if( defaultData?.nutrients ) {

        group.addControl( 'nutrients', createNutrientCategoryGroupArray( defaultData.nutrients ) );

    }



    return group;



}