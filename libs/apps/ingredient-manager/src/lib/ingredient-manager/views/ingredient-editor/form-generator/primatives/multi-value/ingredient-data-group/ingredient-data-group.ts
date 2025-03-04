import { DairyProfile, ExtractProfile, FlourProfile, GrainProfile, HerbProfile, IngredientDataType, NutProfile, OilProfile, ProduceProfile, SaltProfile, SeedProfile, SugarProfile, SweetenerProfile } from "@bake-a-weigh/site-types";
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





export function createIngredientDataGroup( ingredientType : string, data? : IngredientDataType ) : IngredientDataGroupType {



    let dataGroup! : IngredientDataGroupType;



    if( ingredientType === 'flour'     ) { dataGroup = createFlourProfileGroup(     data ? data as FlourProfile     : undefined ); }
    if( ingredientType === 'salt'      ) { dataGroup = createSaltProfileGroup(      data ? data as SaltProfile      : undefined ); }
    if( ingredientType === 'sugar'     ) { dataGroup = createSugarProfileGroup(     data ? data as SugarProfile     : undefined ); }
    if( ingredientType === 'grain'     ) { dataGroup = createGrainProfileGroup(     data ? data as GrainProfile     : undefined ); }
    if( ingredientType === 'nut'       ) { dataGroup = createNutProfileGroup(       data ? data as NutProfile       : undefined ); }
    if( ingredientType === 'seed'      ) { dataGroup = createSeedProfileGroup(      data ? data as SeedProfile      : undefined ); }
    if( ingredientType === 'dairy'     ) { dataGroup = createDairyProfileGroup(     data ? data as DairyProfile     : undefined ); }
    if( ingredientType === 'produce'   ) { dataGroup = createProduceProfileGroup(   data ? data as ProduceProfile   : undefined ); }
    if( ingredientType === 'oil'       ) { dataGroup = createOilProfileGroup(       data ? data as OilProfile       : undefined ); }
    if( ingredientType === 'herb'      ) { dataGroup = createHerbProfileGroup(      data ? data as HerbProfile      : undefined ); }
    if( ingredientType === 'extract'   ) { dataGroup = createExractProfileGroup(    data ? data as ExtractProfile   : undefined ); }
    if( ingredientType === 'sweetener' ) { dataGroup = createSweetenerProfileGroup( data ? data as SweetenerProfile : undefined ); }



    return dataGroup;

    

}