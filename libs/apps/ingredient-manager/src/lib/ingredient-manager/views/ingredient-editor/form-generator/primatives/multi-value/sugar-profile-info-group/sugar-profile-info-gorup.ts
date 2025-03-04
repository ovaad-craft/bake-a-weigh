import { FormGroup }                       from "@angular/forms";
import { CaneInfo, SugarInfo, SugarType }                       from "@bake-a-weigh/site-types";
import { CaneInfoGroup, SugarInfoPartial } from "../../../form-types";
import { createCaneInfoGroup }             from "../cane-info-group/cane-info-group";
import { createSugarInfoPartialGroup }     from "../../single-value/sugar/sugar-info-group/sugar-info-group";





export function createSugarProfileInfoGroup( infoType : SugarType, data : CaneInfo | SugarInfo ) : FormGroup< CaneInfoGroup > | FormGroup< SugarInfoPartial> {



    if( infoType === 'cane' ) { return createCaneInfoGroup( data as CaneInfo ); }

    else { return createSugarInfoPartialGroup( data.consistency ); }



}