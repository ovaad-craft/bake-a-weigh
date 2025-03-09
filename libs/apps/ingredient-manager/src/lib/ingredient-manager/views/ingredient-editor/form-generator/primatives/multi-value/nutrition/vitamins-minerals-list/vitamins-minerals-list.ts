import { FormArray, FormGroup } from "@angular/forms";
import { Nutrient }             from "@bake-a-weigh/site-types";
import { FormArrayGroupList, NutrientGroupType } from "../../../../form-types";
import { createNutrientGroup }  from "../nutrient-group/nutrient-group";





export function createVitaminsAndMineralsArray( defaultList? : Nutrient[] ) : FormGroup< FormArrayGroupList< NutrientGroupType > > {



    const group : FormGroup< FormArrayGroupList< NutrientGroupType > > = new FormGroup< FormArrayGroupList< NutrientGroupType > >({

        list : new FormArray< FormGroup< NutrientGroupType > >( [] )

    });
    


    if( defaultList ) {
        
        defaultList.forEach( a => {
            
            group.controls.list.push( createNutrientGroup( a ) );

        } );

    }



    return group;



}