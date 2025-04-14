import { FormGroup } from "@angular/forms";
import { ElementWeightType, Nutrition, TotalCarbohydratesCategory, TotalFatCategory } from "@bake-a-weigh/site-types";
import { NutritionGroup } from "../../form-generator/form-types";
import { shapeNutrientCategory } from "./shape-nutrient-category/shape-nutrient-category";
import { shapeNutrient } from "./shape-nutrient-category/shape-nutrient/shape-nutrient";


export function shapeNutrition( nutrition : FormGroup< NutritionGroup >[ 'value' ] ) : Nutrition {

    const item : Nutrition = {

        servingSize : nutrition.servingSize as ElementWeightType,
        calories    : nutrition.calories!,
        ingredients : nutrition.ingredients?.list as string[]

    };



    if ( nutrition.totalFat    ) { item.totalFat    = nutrition.totalFat    as TotalFatCategory;  }
    if ( nutrition.cholesterol ) { item.cholesterol = nutrition.cholesterol as ElementWeightType; }
    if ( nutrition.sodium      ) { item.sodium      = nutrition.sodium      as ElementWeightType; }
    if ( nutrition.protein     ) { item.protein     = shapeNutrientCategory( nutrition.protein     ); }
    if ( nutrition.totalCarbohydrates  ) { item.totalCarbohydrates = nutrition.totalCarbohydrates as TotalCarbohydratesCategory; }
    if ( nutrition.vitaminsAndMinerals ) {

        item.vitaminsAndMinerals = [];

        nutrition.vitaminsAndMinerals.list?.forEach( a => item.vitaminsAndMinerals!.push( shapeNutrient( a ) ) );

    }



    return item;

    
}