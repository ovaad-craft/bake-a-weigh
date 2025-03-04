import { FormControl, FormGroup }     from "@angular/forms";
import { SweetenerProfile }           from "@bake-a-weigh/site-types";
import { SweetenerProfileGroup }      from "../../form-types";
import { createSweetenerFormControl } from "../../primatives/single-value/sweetener-form-control/sweetener-form-control";





export function createSweetenerProfileGroup( defaultProfile? : SweetenerProfile ) : FormGroup< SweetenerProfileGroup > {



    return new FormGroup< SweetenerProfileGroup >({

        type : new FormControl< string | null >( defaultProfile ? defaultProfile.type : null ),
        form : createSweetenerFormControl( defaultProfile ? defaultProfile.form : undefined )

    });



}