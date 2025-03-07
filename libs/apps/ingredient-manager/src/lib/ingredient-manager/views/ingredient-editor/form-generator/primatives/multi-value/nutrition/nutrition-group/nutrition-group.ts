import { FormControl, FormGroup }         from "@angular/forms";
import { Nutrition }                      from "@bake-a-weigh/site-types";
import { NutritionGroup }                 from "../../../../form-types";
import { createElementWeightGroup }       from "../../element-weight-group/element-weight-group";
import { createNutrientCategoryGroup }    from "../nutrient-category-group/nutrient-category-group";
import { createIngredientArray }          from "../../ingredient-list/ingredient-list";
import { createVitaminsAndMineralsArray } from "../vitamins-minerals-list/vitamins-minerals-list";





export function createNutritionGroup( defaultData? : Nutrition ) : FormGroup< NutritionGroup > {



    const group : FormGroup< NutritionGroup > = new FormGroup< NutritionGroup >({

        servingSize         : createElementWeightGroup(         defaultData?.servingSize ?? undefined ),
        ingredients         : createIngredientArray(            defaultData?.ingredients ?? undefined ),
        calories            : new FormControl< number | null >( defaultData?.calories    ?? null      )

    });



    if( defaultData?.totalFat ){
        group.addControl( 'totalFat', createNutrientCategoryGroup( defaultData.totalFat) );
    }
    if( defaultData?.cholesterol ){
        group.addControl( 'cholesterol', createNutrientCategoryGroup( defaultData.cholesterol) );
    }
    if( defaultData?.sodium ){
        group.addControl( 'sodium', createNutrientCategoryGroup( defaultData.sodium) );
    }
    if( defaultData?.totalCarbohydrates ){
        group.addControl( 'totalCarbohydrates', createNutrientCategoryGroup( defaultData.totalCarbohydrates ) );
    }
    if( defaultData?.protein ){
        group.addControl( 'protein', createNutrientCategoryGroup( defaultData.protein ) );
    }
    if( defaultData?.vitaminsAndMinerals ){
        group.addControl( 'vitaminsAndMinerals', createVitaminsAndMineralsArray( defaultData.vitaminsAndMinerals ) );
    }

    return group;



    /*return new FormGroup< NutritionGroup >({

        servingSize         : createElementWeightGroup(         defaultData?.servingSize ?? undefined ),
        ingredients         : createIngredientArray(            defaultData?.ingredients ?? undefined ),
        calories            : new FormControl< number | null >( defaultData?.calories    ?? null      ),
        
        totalFat            : ( defaultData?.totalFat            ? createNutrientCategoryGroup(    defaultData.totalFat            ) : undefined ),
        //cholesterol         : ( defaultData?.cholesterol         ? createNutrientCategoryGroup(    defaultData.cholesterol         ) : undefined ),
        sodium              : ( defaultData?.sodium              ? createNutrientCategoryGroup(    defaultData.sodium              ) : undefined ),
        totalCarbohydrates  : ( defaultData?.totalCarbohydrates  ? createNutrientCategoryGroup(    defaultData.totalCarbohydrates  ) : undefined ),
        protein             : ( defaultData?.protein             ? createNutrientCategoryGroup(    defaultData.protein             ) : undefined ),
        //vitaminsAndMinerals : ( defaultData?.vitaminsAndMinerals ? createVitaminsAndMineralsArray( defaultData.vitaminsAndMinerals ) : undefined )

    });*/



}