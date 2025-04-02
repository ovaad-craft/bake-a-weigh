import { FormControl, FormGroup }           from "@angular/forms";
import { FlourProfile }                     from "@bake-a-weigh/site-types";
import { createFlourTypeControl }           from "../../primatives/single-value/flour/flour-type-control/flour-type-control";
import { createFlourClassificationControl } from "../../primatives/single-value/flour/flour-class-control/flour-class-control";
import { FlourProfileGroup }                from "../../form-types";
import { createNutrientTrackerGroup }       from "../../primatives/multi-value/nutrition/nutrient-tracker-group/nutrient-tracker-group";





export function createFlourProfileGroup( defaultProfile? : FlourProfile ) : FormGroup< FlourProfileGroup > {



    const group : FormGroup< FlourProfileGroup > = new FormGroup< FlourProfileGroup >({
        
        type           : createFlourTypeControl( defaultProfile?.type ?? undefined ),
        classification : createFlourClassificationControl( defaultProfile?.classification ?? undefined ),
        bleached     : new FormControl< boolean | null >( defaultProfile?.bleached ?? null )

    });



    if( defaultProfile?.protein ){
        
        group.addControl( 'protein', createNutrientTrackerGroup( defaultProfile.protein ) );

    }
    
    if( defaultProfile?.maxHydration ){

        group.addControl( 'maxHydration', new FormControl< number | null >( defaultProfile.maxHydration ) );

    }

    return group;



}