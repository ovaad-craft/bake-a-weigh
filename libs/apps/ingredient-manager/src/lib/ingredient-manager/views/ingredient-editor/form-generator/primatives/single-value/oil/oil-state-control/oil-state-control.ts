import { FormControl } from "@angular/forms";
import { OilState }    from "@bake-a-weigh/site-types";





export function createOilStateControl( defaultOilState? : OilState ) : FormControl< OilState | null >{



    return new FormControl< OilState >( defaultOilState ? defaultOilState : 'liquid' );



}