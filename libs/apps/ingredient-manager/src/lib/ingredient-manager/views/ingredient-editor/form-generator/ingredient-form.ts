import { FormControl, FormGroup }    from "@angular/forms";
import { IngredientProfile, IngredientProfileType }         from "@bake-a-weigh/site-types";
import { IngredientForm }            from "./form-types";
import { createIngredientNoteList }  from "./primatives/multi-value/ingredient-note-list/ingredient-note-list";
import { createIngredientDataGroup } from "./primatives/multi-value/ingredient-data-group/ingredient-data-group";
import { createLocationsArray }      from "./primatives/multi-value/location-list/location-list";
import { createNutritionGroup }      from "./primatives/multi-value/nutrition/nutrition-group/nutrition-group";





export function createIngredientForm( data? : IngredientProfile ) : FormGroup< IngredientForm > {



    const ingredientForm : FormGroup< IngredientForm > = new FormGroup< IngredientForm >({
        name      : new FormControl< string | null >( data?.name  ?? null ),
        brand     : new FormControl< string | null >( data?.brand ?? null ),
        id        : new FormControl< string | null >( data?.id    ?? null ),
        locations : createLocationsArray( data?.locations ?? undefined )
    });



    if(data?.icon){
        ingredientForm.addControl('icon', new FormControl< string | null >( data.icon ) );
    }
    
    if(data?.photo){
        ingredientForm.addControl('icon', new FormControl< string | null >( data.photo ) );
    }

    if(data?.nutrition){
        ingredientForm.addControl('nutrition', createNutritionGroup( data.nutrition ) );
    }

    if(data?.profileType){
        ingredientForm.addControl('profileType', new FormControl< IngredientProfileType | null >( data.profileType ) );

        if(data?.data){
            
            ingredientForm.addControl( 'data', createIngredientDataGroup( data.profileType, data.data ) );
            
        }
        else{

            ingredientForm.addControl( 'data', createIngredientDataGroup( data.profileType, undefined ) );

        }
    
    }

    if(data?.notes){
        ingredientForm.addControl( 'notes', createIngredientNoteList( data.notes ) );
    }



    return ingredientForm;



}