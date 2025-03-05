import { FormControl, FormGroup } from "@angular/forms";
import { HerbProfile }            from "@bake-a-weigh/site-types";
import { HerbProfileGroup }       from "../../form-types";
import { createPlantPartControl } from "../../primatives/single-value/plant/plant-part-control/plant-part-control";





export function createHerbProfileGroup( defaultProfile? : HerbProfile ) : FormGroup< HerbProfileGroup > {



    return new FormGroup< HerbProfileGroup >({

        species : new FormControl< string | null >( defaultProfile ? defaultProfile.species : null ),
        part    : createPlantPartControl( defaultProfile ? defaultProfile.part : undefined )

    });



}