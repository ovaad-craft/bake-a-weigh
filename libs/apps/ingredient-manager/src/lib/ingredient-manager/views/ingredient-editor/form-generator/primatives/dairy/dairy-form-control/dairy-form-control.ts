import { FormControl } from "@angular/forms";
import { DairyForm }   from "@bake-a-weigh/site-types";





export function createDairyFormControl( defaultDairyForm? : DairyForm ) : FormControl< DairyForm | null > {



    return new FormControl< DairyForm >( defaultDairyForm ? defaultDairyForm : 'milk' );




}