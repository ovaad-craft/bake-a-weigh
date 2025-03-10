import { FormArray, FormGroup }        from "@angular/forms";
import { NutrientCategory }            from "@bake-a-weigh/site-types";
import { FormArrayGroupList, NutrientCategoryGroup }       from "../../../../form-types";
import { createNutrientCategoryGroup } from "../nutrient-category-group/nutrient-category-group";





export function createNutrientCategoryGroupArray( defaultData? : NutrientCategory[] ) : FormGroup< FormArrayGroupList< NutrientCategoryGroup > > {



    const group : FormGroup< FormArrayGroupList< NutrientCategoryGroup > > = new FormGroup< FormArrayGroupList< NutrientCategoryGroup > >({

        list : new FormArray< FormGroup< NutrientCategoryGroup > >([])
         
    });


    if( defaultData ){ defaultData.forEach( a => group.controls.list.push( createNutrientCategoryGroup( a ) ) ); }



    return group;


    
}