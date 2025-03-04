import { FormControl, FormGroup }         from "@angular/forms";
import { CheeseSpecs }                    from "@bake-a-weigh/site-types";
import { createCheeseTextureTypeControl } from "../../single-value/dairy/cheese-texture-type-control/cheese-texture-type-control";
import { createCheeseHydrationControl }   from "../../single-value/dairy/cheese-hydration-control/cheese-hydration-control";
import { CheeseSpecsGroup }               from "../../../form-types";





export function createCheeseSpecsGroup( defaultSpecs? : CheeseSpecs ) : FormGroup< CheeseSpecsGroup > {



    return new FormGroup< CheeseSpecsGroup >({

        kind      : new FormControl< string | null >( defaultSpecs ? defaultSpecs.kind      : null ),
        texture   : createCheeseTextureTypeControl( defaultSpecs   ? defaultSpecs.texture   : undefined ),
        hydration : createCheeseHydrationControl( defaultSpecs     ? defaultSpecs.hydration : undefined)


    });



}