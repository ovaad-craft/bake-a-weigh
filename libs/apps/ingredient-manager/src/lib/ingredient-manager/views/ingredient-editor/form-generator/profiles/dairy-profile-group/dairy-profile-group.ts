import { FormControl, FormGroup } from "@angular/forms";
import { DairyProfile }           from "@bake-a-weigh/site-types";
import { DairyProfileGroup }      from "../../form-types";
import { createDairyTypeControl } from "../../primatives/single-value/dairy/dairy-type-control/dairy-type-control";
import { createDairyFormControl } from "../../primatives/single-value/dairy/dairy-form-control/dairy-form-control";
import { createDairySpecGroup }   from "../../primatives/multi-value/dairy-spec-group/dairy-spec-group";





export function createDairyProfileGroup( defaultProfile? : DairyProfile ) : FormGroup< DairyProfileGroup > {



    return new FormGroup< DairyProfileGroup >({

        type  : createDairyTypeControl( defaultProfile ? defaultProfile.type  : undefined ),
        form  : createDairyFormControl( defaultProfile ? defaultProfile.form  : undefined ),
        specs : ( defaultProfile ?
                    createDairySpecGroup( defaultProfile.form, defaultProfile.specs ) :
                    createDairySpecGroup( 'milk', { type : '2%', state : 'liquid' } )
                ),
        homogenized : new FormControl< boolean | null >( defaultProfile ? defaultProfile.homogenized : null ),
        pasturized  : new FormControl< boolean | null >( defaultProfile ? defaultProfile.pasturized  : null )

    });



}