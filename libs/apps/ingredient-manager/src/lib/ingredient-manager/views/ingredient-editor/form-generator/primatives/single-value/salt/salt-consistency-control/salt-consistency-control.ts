import { FormControl }     from "@angular/forms";
import { SaltConsistency } from "@bake-a-weigh/site-types";





export function createSaltConsistencyControl( defaultConsistency? : SaltConsistency ) : FormControl< SaltConsistency | null > {



    return new FormControl< SaltConsistency >( defaultConsistency ? defaultConsistency : 'fine' );



    
}