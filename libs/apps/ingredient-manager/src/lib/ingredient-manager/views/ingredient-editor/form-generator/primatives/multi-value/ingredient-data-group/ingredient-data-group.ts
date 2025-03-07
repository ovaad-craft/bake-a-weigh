import { DairyProfile, ExtractProfile, FlourProfile, GrainProfile, HerbProfile, IngredientDataType, IngredientProfileType, NutProfile, OilProfile, ProduceProfile, SaltProfile, SeedProfile, SugarProfile, SweetenerProfile } from "@bake-a-weigh/site-types";
import { IngredientDataGroupType }     from "../../../form-types";
import { createFlourProfileGroup }     from "../../../profiles/flour-profile-group/flour-profile-group";
import { createSaltProfileGroup }      from "../../../profiles/salt-profile-group/salt-profile-group";
import { createSugarProfileGroup }     from "../../../profiles/sugar-profile-group/sugar-profile-group";
import { createGrainProfileGroup }     from "../../../profiles/grain-profile-group/grain-profile-group";
import { createNutProfileGroup }       from "../../../profiles/nut-profile-group/nut-profile-group";
import { createSeedProfileGroup }      from "../../../profiles/seed-profile-group/seed-profile-group";
import { createDairyProfileGroup }     from "../../../profiles/dairy-profile-group/dairy-profile-group";
import { createProduceProfileGroup }   from "../../../profiles/produce-profile-group/produce-profile-group";
import { createOilProfileGroup }       from "../../../profiles/oil-profile-group/oil-profile-group";
import { createHerbProfileGroup }      from "../../../profiles/herb-profile-group/herb-profile-group";
import { createExractProfileGroup }    from "../../../profiles/extraxt-profile-group/extract-profile-group";
import { createSweetenerProfileGroup } from "../../../profiles/sweetener-profile-group/sweetener-profile-group";





export function createIngredientDataGroup( ingredientType : IngredientProfileType, data? : IngredientDataType ) : IngredientDataGroupType {



    let dataGroup! : IngredientDataGroupType;

    switch( ingredientType ) {
        case 'flour'     : dataGroup = createFlourProfileGroup(     data ? data as FlourProfile     : undefined ); break;
        case 'salt'      : dataGroup = createSaltProfileGroup(      data ? data as SaltProfile      : undefined ); break;
        case 'sugar'     : dataGroup = createSugarProfileGroup(     data ? data as SugarProfile     : undefined ); break;
        case 'grain'     : dataGroup = createGrainProfileGroup(     data ? data as GrainProfile     : undefined ); break;
        case 'nut'       : dataGroup = createNutProfileGroup(       data ? data as NutProfile       : undefined ); break;
        case 'seed'      : dataGroup = createSeedProfileGroup(      data ? data as SeedProfile      : undefined ); break;
        case 'dairy'     : dataGroup = createDairyProfileGroup(     data ? data as DairyProfile     : undefined ); break;
        case 'produce'   : dataGroup = createProduceProfileGroup(   data ? data as ProduceProfile   : undefined ); break;
        case 'oil'       : dataGroup = createOilProfileGroup(       data ? data as OilProfile       : undefined ); break;
        case 'herb'      : dataGroup = createHerbProfileGroup(      data ? data as HerbProfile      : undefined ); break;
        case 'extract'   : dataGroup = createExractProfileGroup(    data ? data as ExtractProfile   : undefined ); break;
        case 'sweetener' : dataGroup = createSweetenerProfileGroup( data ? data as SweetenerProfile : undefined ); break;
    }



    return dataGroup;



}