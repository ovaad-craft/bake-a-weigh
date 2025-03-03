import { FormControl }       from "@angular/forms";
import { SweetenerFormType } from "@bake-a-weigh/site-types";





export function createSweetenerFormControl( defaultForm? : SweetenerFormType ) : FormControl< SweetenerFormType | null > {



    return new FormControl< SweetenerFormType >( defaultForm ? defaultForm : 'powder' );



}