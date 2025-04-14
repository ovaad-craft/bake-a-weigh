import { FormGroup } from "@angular/forms";
import { TotalCarbohydratesCategory } from "@bake-a-weigh/site-types";
import { TotalCarbohydratesGroup } from "../../../../form-types";
import { createElementWeightGroup } from "../../element-weight-group/element-weight-group";
import { createTotalSugarsGroup } from "./total-sugars-group/total-sugars-group";



export function createTotalCarbohydratesGroup( defaultData? : TotalCarbohydratesCategory ) : FormGroup< TotalCarbohydratesGroup > {

    const group : FormGroup< TotalCarbohydratesGroup > = new FormGroup< TotalCarbohydratesGroup >({

        totalAmount : createElementWeightGroup( defaultData?.totalAmount ?? undefined )

    });



    if( defaultData?.dietaryFiber  ) {  group.addControl( 'dietaryFiber',  createElementWeightGroup( defaultData.dietaryFiber  ));  }
    
    if( defaultData?.solubleFiber  ) {  group.addControl( 'solubleFiber',  createElementWeightGroup( defaultData.solubleFiber  ));  }

    if( defaultData?.totalSugars   ) {  group.addControl( 'totalSugars',   createTotalSugarsGroup(   defaultData.totalSugars   ));  }

    if( defaultData?.sugarAlcohols ) {  group.addControl( 'sugarAlcohols', createElementWeightGroup( defaultData.sugarAlcohols ));  }



    return group;



}