import { FormControl } from "@angular/forms";
import { MilkState }   from "@bake-a-weigh/site-types";





export function createMilkStateControl( defaultMilkState? : MilkState ) : FormControl< MilkState | null > {



    return new FormControl< MilkState >( defaultMilkState ? defaultMilkState : 'liquid' );



}