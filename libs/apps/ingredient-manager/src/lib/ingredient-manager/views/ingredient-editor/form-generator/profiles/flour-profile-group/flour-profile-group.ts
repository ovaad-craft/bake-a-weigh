import { FormControl, FormGroup } from "@angular/forms";
import { FlourProfile } from "@bake-a-weigh/site-types";
import { createFlourTypeControl } from "../../primatives/single-value/flour/flour-type-control/flour-type-control";
import { createFlourClassificationControl } from "../../primatives/single-value/flour/flour-class-control/flour-class-control";





export function createFlourProfileGroup( defaultProfile? : FlourProfile ) : FormGroup< FlourProfile > {



    return new FormGroup< FlourProfile >({
        type           : createFlourTypeControl( defaultProfile ? defaultProfile.type : undefined ),
        classification : createFlourClassificationControl( defaultProfile ?
                                                           defaultProfile.classification :
                                                           undefined
                                                         ),
        maxHydration : new FormControl< number | undefined >( defaultProfile ? defaultProfile.maxHydration : undefined ),
        //protein      : new FormControl
    });
}