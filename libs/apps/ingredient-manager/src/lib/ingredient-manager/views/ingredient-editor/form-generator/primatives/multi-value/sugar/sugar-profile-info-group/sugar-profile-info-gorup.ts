import { CaneInfo, SugarInfo, SugarType }  from "@bake-a-weigh/site-types";
import { SugarInfoGroupType }              from "../../../../form-types";
import { createCaneInfoGroup }             from "../cane-info-group/cane-info-group";
import { createSugarInfoPartialGroup }     from "../../../single-value/sugar/sugar-info-group/sugar-info-group";





export function createSugarProfileInfoGroup( infoType : SugarType, data : CaneInfo | SugarInfo ) : SugarInfoGroupType {



    if( infoType === 'cane' ) { return createCaneInfoGroup( data as CaneInfo ); }

    else { return createSugarInfoPartialGroup( data.consistency ); }



}