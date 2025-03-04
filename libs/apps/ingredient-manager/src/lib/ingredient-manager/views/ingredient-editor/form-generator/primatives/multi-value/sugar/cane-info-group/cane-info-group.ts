import { FormGroup }                     from "@angular/forms";
import { CaneInfo }                      from "@bake-a-weigh/site-types";
import { CaneInfoGroup }                 from "../../../../form-types";
import { createSugarConsistencyControl } from "../../../single-value/sugar/sugar-consistency-control/sugar-consistency-control";
import { createCaneTypeControl }         from "../../../single-value/sugar/cane-type-control/cane-type-control";





export function createCaneInfoGroup( defaultInfo? : CaneInfo ) : FormGroup< CaneInfoGroup > {



    return new FormGroup< CaneInfoGroup >({

        consistency : createSugarConsistencyControl( defaultInfo ? defaultInfo.consistency : undefined),
        type        : createCaneTypeControl( defaultInfo ? defaultInfo.type : undefined )

    });




}