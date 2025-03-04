import { FormArray, FormGroup } from "@angular/forms";
import { Nutrient }             from "@bake-a-weigh/site-types";
import { NutrientGroupType }    from "../../../form-types";
import { createNutrientGroup }  from "../nutrient-group/nutrient-group";





export function createNutrientListArray( defaultList? : Nutrient[] ) : FormArray< FormGroup< NutrientGroupType > > {



    const nutrients : FormArray< FormGroup< NutrientGroupType > > = new FormArray< FormGroup< NutrientGroupType > >([]);


    if( defaultList ){

        defaultList.forEach( a => nutrients.push( createNutrientGroup( a ) ) );

    }


    return nutrients;



}