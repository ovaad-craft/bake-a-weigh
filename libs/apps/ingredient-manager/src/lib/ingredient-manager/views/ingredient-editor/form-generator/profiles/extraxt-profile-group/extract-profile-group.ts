import { FormGroup }                 from "@angular/forms";
import { ExtractProfile }            from "@bake-a-weigh/site-types";
import { ExtractProfileGroup }       from "../../form-types";
import { createExtractType }         from "../../primatives/single-value/extract/extract-type-control/extract-type-control";
import { createExtractStateControl } from "../../primatives/single-value/extract/extract-state-control/extract-state-control";





export function createExractProfileGroup( defaultProfile? : ExtractProfile ) : FormGroup< ExtractProfileGroup > {



    return new FormGroup< ExtractProfileGroup >({

        type  : createExtractType(         defaultProfile ? defaultProfile.type  : undefined ),
        state : createExtractStateControl( defaultProfile ? defaultProfile.state : undefined )

    });



}