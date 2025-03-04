import { FormArray, FormGroup }        from "@angular/forms";
import { NutrientCategory }            from "@bake-a-weigh/site-types";
import { NutrientCategoryGroup }       from "../../../form-types";
import { createNutrientCategoryGroup } from "../nutrient-category-group/nutrient-category-group";





export function createNutrientCategoryGroupArray( defaultData? : NutrientCategory[] ) : FormArray< FormGroup< NutrientCategoryGroup > > {



    const nutrients : FormArray< FormGroup< NutrientCategoryGroup > > = new FormArray< FormGroup < NutrientCategoryGroup > >( [] );


    if( defaultData ){ defaultData.forEach( a => nutrients.push( createNutrientCategoryGroup( a ) ) ); }



    return nutrients;


    
}