import { FormControl, FormGroup } from "@angular/forms";
import { OilProfile }             from "@bake-a-weigh/site-types";
import { OilProfileGroup }        from "../../form-types";
import { createOilStateControl }  from "../../primatives/single-value/oil/oil-state-control/oil-state-control";





export function createOilProfileGroup( defaultProfile? : OilProfile ) : FormGroup< OilProfileGroup > {



    return new FormGroup< OilProfileGroup >({

        type  : new FormControl< string | null >( defaultProfile ? defaultProfile.type : null ),
        state : createOilStateControl( defaultProfile ? defaultProfile.state : undefined )

    });



}