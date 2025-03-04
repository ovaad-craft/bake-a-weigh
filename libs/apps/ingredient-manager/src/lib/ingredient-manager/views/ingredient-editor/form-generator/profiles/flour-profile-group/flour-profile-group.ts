import { FormControl, FormGroup }           from "@angular/forms";
import { FlourProfile }                     from "@bake-a-weigh/site-types";
import { createFlourTypeControl }           from "../../primatives/single-value/flour/flour-type-control/flour-type-control";
import { createFlourClassificationControl } from "../../primatives/single-value/flour/flour-class-control/flour-class-control";
import { FlourProfileGroup }                from "../../form-types";
import { createNutrientTrackerGroup }       from "../../primatives/multi-value/nutrient-tracker-group/nutrient-tracker-group";





export function createFlourProfileGroup( defaultProfile? : FlourProfile ) : FormGroup< FlourProfileGroup > {



    return new FormGroup< FlourProfileGroup >({
        
        type           : createFlourTypeControl( defaultProfile ? defaultProfile.type : undefined ),
        classification : createFlourClassificationControl( defaultProfile ?
                                                           defaultProfile.classification :
                                                           undefined
                                                         ),
        bleached     : new FormControl< boolean | null >( defaultProfile ? defaultProfile.bleached : null ),
        protein      : ( defaultProfile ? createNutrientTrackerGroup( defaultProfile.protein ) : undefined ),
        maxHydration : ( defaultProfile?.maxHydration ?
                            new FormControl< number | null >( defaultProfile.maxHydration ) : undefined
                       )

    });



}