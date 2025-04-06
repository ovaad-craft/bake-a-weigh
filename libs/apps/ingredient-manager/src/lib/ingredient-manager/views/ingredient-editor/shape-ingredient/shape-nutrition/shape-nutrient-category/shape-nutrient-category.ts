import { FormGroup } from "@angular/forms";
import { ElementWeightType, NutrientCategory } from "@bake-a-weigh/site-types";
import { NutrientCategoryGroup } from "../../../form-generator/form-types";


export function shapeNutrientCategory( data : FormGroup< NutrientCategoryGroup >[ 'value' ] ) : NutrientCategory {



    const item : NutrientCategory = {

        name : data.name?? undefined,
        totalAmount : data.totalAmount as ElementWeightType

    }



    if ( data.nutrients ) {

        const nutrients : NutrientCategory[] = [];


        
        data.nutrients.list!.forEach( a => nutrients.push( shapeNutrientCategory( a ) ) );

        item.nutrients = nutrients;

    }


    
    return item;



}