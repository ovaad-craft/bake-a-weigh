import { FormControl } from "@angular/forms";
import { DairyType }   from "@bake-a-weigh/site-types";





export function createDairyTypeControl( defaultDairyType? : DairyType ) : FormControl< DairyType | null > {



    return new FormControl< DairyType >( defaultDairyType ? defaultDairyType : 'cow' );




}