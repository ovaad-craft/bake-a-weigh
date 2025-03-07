import { FormControl, FormGroup } from "@angular/forms";
import { ElementWeightType }      from "@bake-a-weigh/site-types";
import { ElementWeightGroupType } from "../../../form-types";
import { createWeightControl }    from "../../single-value/measurements/weight-control/weight-control";



export function createElementWeightGroup( defaultValues? : ElementWeightType ) : FormGroup< ElementWeightGroupType > {



    const group : FormGroup< ElementWeightGroupType > = new FormGroup< ElementWeightGroupType >({

        amount     : new FormControl< number | null >( defaultValues?.amount                    ?? null     ),
        weightType : createWeightControl(              defaultValues?.weightType ?? undefined )

    });

    if( defaultValues?.percentage ){

        group.addControl('percentage', new FormControl< number | null >( defaultValues.percentage ) );

    }



    return group;



}