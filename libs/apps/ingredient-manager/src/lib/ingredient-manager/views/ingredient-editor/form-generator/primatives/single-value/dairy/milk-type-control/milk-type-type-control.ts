import { FormControl } from "@angular/forms";
import { MilkType }    from "@bake-a-weigh/site-types";





export function createMilkTypeControl( defaultMilkType? : MilkType ) : FormControl< MilkType | null > {



    return new FormControl< MilkType >( defaultMilkType ? defaultMilkType : '2%' );



}