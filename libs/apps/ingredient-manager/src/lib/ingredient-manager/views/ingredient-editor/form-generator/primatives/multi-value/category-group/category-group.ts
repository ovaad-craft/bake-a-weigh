import { FormControl, FormGroup }  from "@angular/forms";
import { IngredientCategory }      from "@bake-a-weigh/site-types";
import { IngredientCategoryGroup } from "../../../form-types";





export function createCategoryGroup( defaultSettings? : IngredientCategory ) : FormGroup< IngredientCategoryGroup > {



    return new FormGroup< IngredientCategoryGroup >({

        name        : new FormControl< string | null >( defaultSettings ? defaultSettings.name : null ),
        subCategory : ( defaultSettings?.subCategory ?
                            createCategoryGroup( defaultSettings.subCategory ) : undefined
                      )

    });




}