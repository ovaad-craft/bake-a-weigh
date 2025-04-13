import { FormGroup } from "@angular/forms";
import { TotalFatCategoryGroup } from "../../../../form-types";
import { TotalFatCategory } from "@bake-a-weigh/site-types";
import { createElementWeightGroup } from "../../element-weight-group/element-weight-group";


export function createTotalFatCategoryGroup( defaultData? : TotalFatCategory ) : FormGroup< TotalFatCategoryGroup > {

    const group : FormGroup< TotalFatCategoryGroup > = new FormGroup< TotalFatCategoryGroup >({

        totalAmount : createElementWeightGroup( defaultData?.totalAmount ?? undefined )

    });

    

    if( defaultData && defaultData.saturatedFat ) {

        group.addControl('saturatedFat', createElementWeightGroup( defaultData.saturatedFat ) );
        
    }
    
    if( defaultData && defaultData.transFat ) {

        group.addControl('transFat', createElementWeightGroup( defaultData.transFat ) );

    }
    
    if( defaultData && defaultData.monounsaturatedFat ) {

        group.addControl('monounsaturatedFat', createElementWeightGroup( defaultData.monounsaturatedFat ) );

    }
    
    if( defaultData && defaultData.polyunsaturatedFat ) {

        group.addControl('polyunsaturatedFat', createElementWeightGroup( defaultData.polyunsaturatedFat ) );

    }

    return group;
}