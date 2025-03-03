import { FormControl, FormGroup } from "@angular/forms";
import { ElementWeightType } from "@bake-a-weigh/site-types";
import { ElementWeightGroupType } from "../../../form-types";
import { createWeightControl } from "../../single-value/measurements/weight-control/weight-control";



export function createElementWeightGroup( defaultValues? : ElementWeightType ) : FormGroup< ElementWeightGroupType > {



    const group : FormGroup< ElementWeightGroupType > = new FormGroup< ElementWeightGroupType >({

        amount     : new FormControl< number | null >( defaultValues ? defaultValues.amount : null ),
        weightType : createWeightControl( defaultValues ? defaultValues.weightType : undefined ),
        percentage : ( defaultValues?.percentage ? new FormControl< number | null >( defaultValues.percentage ) : undefined )

    });



    return group;



}