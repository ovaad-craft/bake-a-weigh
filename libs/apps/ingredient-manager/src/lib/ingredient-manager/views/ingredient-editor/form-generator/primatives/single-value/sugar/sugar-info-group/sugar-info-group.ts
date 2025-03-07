import { FormControl, FormGroup } from "@angular/forms";
import { SugarInfoPartial }       from "../../../../form-types";
import { SugarConsistencyType }   from "@bake-a-weigh/site-types";





export function createSugarInfoPartialGroup( defaultInfo? : SugarConsistencyType ) : FormGroup< SugarInfoPartial > {



    return new FormGroup< SugarInfoPartial >({

        consistency : new FormControl< SugarConsistencyType | null >( defaultInfo ?? null )

    });



}