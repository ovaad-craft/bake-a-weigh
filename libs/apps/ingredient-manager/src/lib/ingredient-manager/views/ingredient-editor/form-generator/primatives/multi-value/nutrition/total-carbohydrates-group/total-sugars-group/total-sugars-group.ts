import { FormGroup } from "@angular/forms";
import { TotalSugarsCategory } from "@bake-a-weigh/site-types";
import { TotalSugarsGroup } from "../../../../../form-types";
import { createElementWeightGroup } from "../../../element-weight-group/element-weight-group";



export function createTotalSugarsGroup( defaultData? : TotalSugarsCategory ) : FormGroup< TotalSugarsGroup > {



    const group : FormGroup< TotalSugarsGroup > = new FormGroup< TotalSugarsGroup >({

        totalAmount : createElementWeightGroup( defaultData?.totalAmount ?? undefined )

    });



    if( defaultData?.addedSugars ) {

        group.addControl( 'addedSugars', createElementWeightGroup( { amount : 0, weightType : 'g' } ) );

    }



    return group;



}