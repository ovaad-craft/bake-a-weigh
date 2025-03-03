import { FormControl } from "@angular/forms";
import { CaneType }    from "@bake-a-weigh/site-types";





export function createCaneTypeControl( defaultCaneType : CaneType ) : FormControl< CaneType | null > {



    return new FormControl< CaneType >( defaultCaneType ? defaultCaneType : 'white' );




}