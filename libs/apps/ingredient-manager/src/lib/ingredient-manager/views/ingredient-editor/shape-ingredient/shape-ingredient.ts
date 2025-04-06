import { IngredientDataType, IngredientNote, IngredientProfile } from "@bake-a-weigh/site-types";
import { IngredientForm } from "../form-generator/form-types";
import { FormGroup } from "@angular/forms";
import { shapeNutrition } from "./shape-nutrition/shape-nutrition";


export function shapeIngredient( ingredient : FormGroup< IngredientForm >[ 'value' ] ) : IngredientProfile {



    const item : IngredientProfile = {

        name  : ingredient.name!,
        brand : ingredient.brand!,
        id    : ingredient.id!,
        locations : ingredient.locations!.list as string[]

    };

    

    if ( ingredient.photo ) { item.photo = ingredient.photo; }

    if ( ingredient.icon ) { item.icon = ingredient.icon; }

    if ( ingredient.nutrition ) { item.nutrition = shapeNutrition( ingredient.nutrition ); }

    if ( ingredient.notes ) { item.notes = ingredient.notes.list as IngredientNote[]; }

    if ( ingredient.profileType ) { item.profileType = ingredient.profileType; }

    if ( ingredient.data ) { item.data = ingredient.data as IngredientDataType; }



    return item;


}