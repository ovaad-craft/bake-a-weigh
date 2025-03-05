import { FormGroup }               from "@angular/forms";
import { CreamSpecs }              from "@bake-a-weigh/site-types";
import { CreamSpecsGroup }         from "../../../../form-types";
import { createCreamTypeControl }  from "../../../single-value/dairy/cream-type-control/cream-type-control";
import { createCreamStateControl } from "../../../single-value/dairy/cream-state-control/cream-state-control";





export function createCreamSpecsGroup( defaultSpecs? : CreamSpecs ) : FormGroup< CreamSpecsGroup > {



    return new FormGroup< CreamSpecsGroup >({

        type  : createCreamTypeControl(  defaultSpecs ? defaultSpecs.type  : undefined ),
        state : createCreamStateControl( defaultSpecs ? defaultSpecs.state : undefined )

    });



}