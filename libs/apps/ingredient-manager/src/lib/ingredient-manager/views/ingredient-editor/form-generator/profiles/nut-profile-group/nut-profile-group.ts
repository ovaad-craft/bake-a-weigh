import { FormControl, FormGroup } from "@angular/forms";
import { NutProfile }             from "@bake-a-weigh/site-types";
import { NutProfileGroup }        from "../../form-types";





export function createNutProfileGroup( defaultProfile? : NutProfile ) : FormGroup< NutProfileGroup > {



    return new FormGroup< NutProfileGroup >({

        species  : new FormControl< string  | null >( defaultProfile ? defaultProfile.species : null ),
        roasted  : new FormControl< boolean | null >( defaultProfile ? defaultProfile.roasted : null ),
        salted   : new FormControl< boolean | null >( defaultProfile ? defaultProfile.salted  : null )

    });



}
//nugt