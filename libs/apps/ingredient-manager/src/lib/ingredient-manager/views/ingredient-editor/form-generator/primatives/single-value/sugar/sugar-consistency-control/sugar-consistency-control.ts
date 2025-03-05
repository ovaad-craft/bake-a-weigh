import { FormControl }          from "@angular/forms";
import { SugarConsistencyType } from "@bake-a-weigh/site-types";





export function createSugarConsistencyControl( defaultConsistency? : SugarConsistencyType ) : FormControl< SugarConsistencyType | null > {



    return new FormControl< SugarConsistencyType >( defaultConsistency ? defaultConsistency : 'small granules' );



}