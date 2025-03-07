import { FormControl } from "@angular/forms";
import { PlantPart }   from "@bake-a-weigh/site-types";





export function createPlantPartControl( defaultPart? : PlantPart ) : FormControl< PlantPart | null > {



    return new FormControl< PlantPart | null >( defaultPart ?? null );



}