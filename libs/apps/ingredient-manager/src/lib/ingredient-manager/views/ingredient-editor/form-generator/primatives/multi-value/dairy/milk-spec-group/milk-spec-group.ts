import { FormGroup }              from "@angular/forms";
import { MilkSpecs }              from "@bake-a-weigh/site-types";
import { MilkSpecsGroup }         from "../../../../form-types";
import { createMilkTypeControl }  from "../../../single-value/dairy/milk-type-control/milk-type-type-control";
import { createMilkStateControl } from "../../../single-value/dairy/milk-state-control/milk-state-control";





export function createMilkSPecsGroup( defaultSpecs? : MilkSpecs ) : FormGroup< MilkSpecsGroup > {



    return new FormGroup< MilkSpecsGroup >({

        type  : createMilkTypeControl(  defaultSpecs ? defaultSpecs.type  : undefined ),
        state : createMilkStateControl( defaultSpecs ? defaultSpecs.state : undefined )

    });



}