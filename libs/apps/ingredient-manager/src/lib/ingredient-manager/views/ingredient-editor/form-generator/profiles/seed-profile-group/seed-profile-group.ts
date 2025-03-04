import { FormControl, FormGroup } from "@angular/forms";
import { SeedProfile }            from "@bake-a-weigh/site-types";
import { SpeciesPrimative }       from "../../form-types";





export function createSeedProfileGroup( defaultProfile? : SeedProfile ) : FormGroup< SpeciesPrimative > {



    return new FormGroup< SpeciesPrimative >({

        species : new FormControl< string | null >( defaultProfile ? defaultProfile.species : null )

    });


    
}