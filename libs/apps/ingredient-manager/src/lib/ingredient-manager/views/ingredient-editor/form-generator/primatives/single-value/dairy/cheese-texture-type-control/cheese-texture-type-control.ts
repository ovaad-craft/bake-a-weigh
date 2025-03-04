import { FormControl }       from "@angular/forms";
import { CheeseTextureType } from "@bake-a-weigh/site-types";





export function createCheeseTextureTypeControl( defaultTexture? : CheeseTextureType ) : FormControl< CheeseTextureType | null > {



    return new FormControl< CheeseTextureType >( defaultTexture ? defaultTexture : 'solid' );



}