import { FormControl, FormGroup }      from "@angular/forms";
import { CaneInfo, SugarConsistencyType, SugarProfile }                from "@bake-a-weigh/site-types";
import { SugarProfileGroup }           from "../../form-types";
import { createSugarTypeControl }      from "../../primatives/single-value/sugar/sugar-type-control/sugar-type-control";
import { createSugarProfileInfoGroup } from "../../primatives/multi-value/sugar/sugar-profile-info-group/sugar-profile-info-gorup";
import { createSugarInfoPartialGroup } from "../../primatives/single-value/sugar/sugar-info-group/sugar-info-group";





export function createSugarProfileGroup( defaultProfile? : SugarProfile ) : FormGroup< SugarProfileGroup > {

    const group : FormGroup< SugarProfileGroup > = new FormGroup< SugarProfileGroup >({
        type   : createSugarTypeControl( defaultProfile?.type ?? undefined ),
        source : new FormControl< string | null >( defaultProfile?.source ?? null ),
        infoType : new FormControl< string | null >( defaultProfile?.infoType ?? null)
    });





    if ( defaultProfile?.infoType === 'partial') {

        group.addControl( 'info', createSugarInfoPartialGroup( defaultProfile.info.consistency ) );
    }
    
    
    
    
    if ( defaultProfile?.infoType === 'group') {

        group.addControl( 'info', createSugarProfileInfoGroup( 'cane', defaultProfile.info ) );
    }





    return group;


    /*return new FormGroup< SugarProfileGroup >({

        type   : createSugarTypeControl( defaultProfile ? defaultProfile.type : undefined ),
        source : new FormControl< string | null >( defaultProfile ? defaultProfile.source : null ),
        info   : ( defaultProfile ?
                     createSugarProfileInfoGroup( defaultProfile.type, defaultProfile.info ) :
                     createSugarProfileInfoGroup( 'cane', { type : 'white', consistency : 'small granules' } )
                 )

    });*/
    


}