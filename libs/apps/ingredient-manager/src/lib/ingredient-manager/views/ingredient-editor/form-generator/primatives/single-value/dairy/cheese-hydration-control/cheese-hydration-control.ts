import { FormControl }         from "@angular/forms";
import { CheeseHydrationType } from "@bake-a-weigh/site-types";





export function createCheeseHydrationControl( defaultHydration? : CheeseHydrationType ) : FormControl< CheeseHydrationType | null > {



    return new FormControl< CheeseHydrationType >( defaultHydration ? defaultHydration : 'dry' );



}