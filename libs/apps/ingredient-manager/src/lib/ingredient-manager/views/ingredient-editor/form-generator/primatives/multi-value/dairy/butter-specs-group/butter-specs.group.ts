import { FormGroup }               from "@angular/forms";
import { ButterSpecs }             from "@bake-a-weigh/site-types";
import { ButterSpecsGroup }        from "../../../../form-types";
import { createButterTypeControl } from "../../../single-value/dairy/butter-type-control/butter-type-control";





export function createButterSpecsGroup( defaultSpecs? : ButterSpecs ) : FormGroup< ButterSpecsGroup > {



    return new FormGroup< ButterSpecsGroup >({
        
        type : createButterTypeControl( defaultSpecs ? defaultSpecs.type : undefined )

    });



}