import { FormControl, FormGroup }      from "@angular/forms";
import { SugarProfile }                from "@bake-a-weigh/site-types";
import { SugarProfileGroup }           from "../../form-types";
import { createSugarTypeControl }      from "../../primatives/single-value/sugar/sugar-type-control/sugar-type-control";
import { createSugarProfileInfoGroup } from "../../primatives/multi-value/sugar/sugar-profile-info-group/sugar-profile-info-gorup";





export function createSugarProfileGroup( defaultProfile? : SugarProfile ) : FormGroup< SugarProfileGroup > {



    return new FormGroup< SugarProfileGroup >({

        type   : createSugarTypeControl( defaultProfile ? defaultProfile.type : undefined ),
        source : new FormControl< string | null >( defaultProfile ? defaultProfile.source : null ),
        info   : ( defaultProfile ?
                     createSugarProfileInfoGroup( defaultProfile.type, defaultProfile.info ) :
                     createSugarProfileInfoGroup( 'cane', { type : 'white', consistency : 'small granules' } )
                 )

    });
    


}