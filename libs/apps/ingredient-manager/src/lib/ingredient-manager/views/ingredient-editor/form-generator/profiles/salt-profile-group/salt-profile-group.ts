import { FormControl, FormGroup }       from "@angular/forms";
import { SaltProfile }                  from "@bake-a-weigh/site-types";
import { SaltProfileGroup }             from "../../form-types";
import { createSaltTypeControl }        from "../../primatives/single-value/salt/salt-type-control/salt-type-control";
import { createSaltConsistencyControl } from "../../primatives/single-value/salt/salt-consistency-control/salt-consistency-control";
import { createNutrientTrackerGroup }   from "../../primatives/multi-value/nutrient-tracker-group/nutrient-tracker-group";





export function createSaltProfileGroup( defaultProfile? : SaltProfile ) : FormGroup< SaltProfileGroup > {



    return new FormGroup< SaltProfileGroup >({

        type        : createSaltTypeControl(        defaultProfile ? defaultProfile.type        : undefined ),
        consistency : createSaltConsistencyControl( defaultProfile ? defaultProfile.consistency : undefined ),
        sodium      : ( defaultProfile?.sodium ?
                            createNutrientTrackerGroup( defaultProfile?.sodium ) : undefined
                      ),
        iodized     : new FormControl< boolean | null >( defaultProfile ? defaultProfile.iodized : null  )

    });



}