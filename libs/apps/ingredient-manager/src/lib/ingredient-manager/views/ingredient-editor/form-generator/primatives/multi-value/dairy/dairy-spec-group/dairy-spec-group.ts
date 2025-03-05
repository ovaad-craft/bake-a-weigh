import { ButterSpecs, CheeseSpecs, CreamSpecs, DairyForm, DairySpecType, MilkSpecs, YogurtSpecs } from "@bake-a-weigh/site-types";
import { DairySpecGroupType }     from "../../../../form-types";
import { createMilkSPecsGroup }   from "../milk-spec-group/milk-spec-group";
import { createCreamSpecsGroup }  from "../cream-specs-group/cream-specs-group";
import { createYogurtSpecsGroup } from "../yogurt-specs-group/yogurt-specs-group";
import { createButterSpecsGroup } from "../butter-specs-group/butter-specs.group";
import { createCheeseSpecsGroup } from "../cheese-specs-group/cheese-specs-group";





export function createDairySpecGroup( form : DairyForm, data : DairySpecType ) : DairySpecGroupType {



    switch( form ){

        case "milk"   : return createMilkSPecsGroup(   data as MilkSpecs   ); break;
        case "cream"  : return createCreamSpecsGroup(  data as CreamSpecs  ); break;
        case "yogurt" : return createYogurtSpecsGroup( data as YogurtSpecs ); break;
        case "butter" : return createButterSpecsGroup( data as ButterSpecs ); break;
        case "cheese" : return createCheeseSpecsGroup( data as CheeseSpecs ); break;

    }


    
}