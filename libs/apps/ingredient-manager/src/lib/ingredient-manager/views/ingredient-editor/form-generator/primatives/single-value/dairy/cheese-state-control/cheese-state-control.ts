import { FormControl } from "@angular/forms";
import { CheeseState } from "@bake-a-weigh/site-types";





export function createCheeseStateControl( defaultCheeseState? : CheeseState ) : FormControl< CheeseState | null > {



    return new FormControl< CheeseState >( defaultCheeseState ? defaultCheeseState : 'block' );


    
}