import { FormControl } from "@angular/forms";
import { YogurtType }  from "@bake-a-weigh/site-types";





export function createYogurtTypeControl( defaultYogurtType? : YogurtType ) : FormControl< YogurtType | null > {



    return new FormControl< YogurtType | null >( defaultYogurtType ?? null );



}