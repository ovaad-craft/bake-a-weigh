import { FormControl, FormGroup }  from "@angular/forms";
import { YogurtSpecs }             from "@bake-a-weigh/site-types";
import { YogurtSpecsGroup }        from "../../../../form-types";
import { createYogurtTypeControl } from "../../../single-value/dairy/yogurt-type-control/yogurt-type-control";





export function createYogurtSpecsGroup( defaultSpecs? : YogurtSpecs ) : FormGroup< YogurtSpecsGroup > {



    return new FormGroup< YogurtSpecsGroup >({

        type   : createYogurtTypeControl( defaultSpecs ? defaultSpecs.type : undefined ),
        flavor : new FormControl< string | null >( defaultSpecs?.flavor ? defaultSpecs.flavor : null )

    });



}