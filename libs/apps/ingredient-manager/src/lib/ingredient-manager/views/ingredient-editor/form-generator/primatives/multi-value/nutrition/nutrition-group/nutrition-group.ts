import { FormControl, FormGroup }         from "@angular/forms";
import { Nutrition }                      from "@bake-a-weigh/site-types";
import { NutritionGroup }                 from "../../../../form-types";
import { createElementWeightGroup }       from "../../element-weight-group/element-weight-group";
import { createNutrientCategoryGroup }    from "../nutrient-category-group/nutrient-category-group";
import { createIngredientArray }          from "../../ingredient-list/ingredient-list";
import { createVitaminsAndMineralsArray } from "../vitamins-minerals-list/vitamins-minerals-list";





export function createNutritionGroup( defaultData? : Nutrition ) : FormGroup< NutritionGroup > {



    return new FormGroup< NutritionGroup >({

        servingSize         : createElementWeightGroup(         defaultData ? defaultData.servingSize : undefined ),
        ingredients         : createIngredientArray(            defaultData ? defaultData.ingredients : undefined ),
        calories            : new FormControl< number | null >( defaultData ? defaultData.calories    : null      ),
        totalFat            : ( defaultData?.totalFat            ? createNutrientCategoryGroup(    defaultData.totalFat            ) : undefined ),
        cholesterol         : ( defaultData?.cholesterol         ? createNutrientCategoryGroup(    defaultData.cholesterol         ) : undefined ),
        sodium              : ( defaultData?.sodium              ? createNutrientCategoryGroup(    defaultData.sodium              ) : undefined ),
        totalCarbohydrates  : ( defaultData?.totalCarbohydrates  ? createNutrientCategoryGroup(    defaultData.totalCarbohydrates  ) : undefined ),
        protein             : ( defaultData?.protein             ? createNutrientCategoryGroup(    defaultData.protein             ) : undefined ),
        vitaminsAndMinerals : ( defaultData?.vitaminsAndMinerals ? createVitaminsAndMineralsArray( defaultData.vitaminsAndMinerals ) : undefined )

    });



}