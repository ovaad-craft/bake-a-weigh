import { FormGroup }                from "@angular/forms";
import { ProduceProfile }           from "@bake-a-weigh/site-types";
import { ProduceProfileGroup }      from "../../form-types";
import { createProduceTypeControl } from "../../primatives/single-value/produce/produce-type-control/produce-type-control";
import { createProdueStateControl } from "../../primatives/single-value/produce/produce-state-control/produce-state-control";





export function createProduceProfileGroup( defaultProfile? : ProduceProfile ) : FormGroup< ProduceProfileGroup > {



    return new FormGroup< ProduceProfileGroup >({

        type  : createProduceTypeControl( defaultProfile ? defaultProfile.type  : undefined ),
        state : createProdueStateControl( defaultProfile ? defaultProfile.state : undefined )

    });



}