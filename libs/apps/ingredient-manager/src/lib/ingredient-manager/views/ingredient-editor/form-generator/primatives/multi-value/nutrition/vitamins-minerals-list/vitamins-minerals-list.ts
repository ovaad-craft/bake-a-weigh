import { FormArray, FormGroup } from "@angular/forms";
import { Nutrient }             from "@bake-a-weigh/site-types";
import { NutrientGroupType }    from "../../../../form-types";
import { createNutrientGroup }  from "../nutrient-group/nutrient-group";





export function createVitaminsAndMineralsArray( defaultList? : Nutrient[] ) : FormArray< FormGroup< NutrientGroupType > > {



    const list : FormArray< FormGroup< NutrientGroupType > > = new FormArray< FormGroup< NutrientGroupType > >([]);

    if( defaultList ) {
        
        defaultList.forEach( a => {
            const group : FormGroup<NutrientGroupType> = createNutrientGroup(a);
            
            list.push( group );
            console.log(group);

        } );

    }



    return list;



}