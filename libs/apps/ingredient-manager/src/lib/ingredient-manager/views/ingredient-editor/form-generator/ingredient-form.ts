import { FormControl, FormGroup }    from "@angular/forms";
import { IngredientProfile, IngredientProfileType }         from "@bake-a-weigh/site-types";
import { IngredientForm, NutritionGroup }            from "./form-types";
import { createIngredientNoteList }  from "./primatives/multi-value/ingredient-note-list/ingredient-note-list";
import { createIngredientDataGroup } from "./primatives/multi-value/ingredient-data-group/ingredient-data-group";
import { createLocationsArray }      from "./primatives/multi-value/location-list/location-list";
import { createNutritionGroup }      from "./primatives/multi-value/nutrition/nutrition-group/nutrition-group";





export function createIngredientForm( data? : IngredientProfile ) : FormGroup< IngredientForm > {



    const ingredientForm : FormGroup< IngredientForm > = new FormGroup< IngredientForm >({
        name      : new FormControl< string | null >( data?.name  ?? null ),
        brand     : new FormControl< string | null >( data?.brand ?? null ),
        id        : new FormControl< string | null >( data?.id    ?? null ),
        locations : createLocationsArray( data ? data.locations : undefined )
    });

    if(data?.icon){
        ingredientForm.addControl('icon', new FormControl< string | null >(data.icon));
    }
    
    if(data?.photo){
        ingredientForm.addControl('icon', new FormControl< string | null >(data.photo));
    }

    if(data?.nutrition){
        ingredientForm.addControl('nutrition', createNutritionGroup(data.nutrition));
    }

    if(data?.profileType){
        ingredientForm.addControl('profileType', new FormControl< IngredientProfileType | null >(data.profileType));

        if(data?.data){
            ingredientForm.addControl( 'data', createIngredientDataGroup( data.profileType, data.data ) );
        }
        else{
            ingredientForm.addControl( 'data', createIngredientDataGroup( data.profileType, undefined ) );
        }
        //ingredientForm.addControl('data', createIngredientDataGroup(ingredientForm.controls.profileType.value as IngredientProfileType, data?.data ? data.data : undefined))
    }

    /*if(ingredientForm.controls.profileType?.value){
    }*/



    return ingredientForm;

    

    /*return new FormGroup< IngredientForm >({

        name      : new FormControl< string | null >( data?.name  ?? null ),
        brand     : new FormControl< string | null >( data?.brand ?? null ),
        id        : new FormControl< string | null >( data?.id    ?? null ),

        photo     : ( data?.photo ? new FormControl< string | null >( data.photo ) : undefined ),
        icon      : ( data?.icon  ? new FormControl< string | null >( data.icon  ) : undefined ),

        nutrition : ( data?.nutrition ? createNutritionGroup(      data?.nutrition ?? undefined              ) : undefined ),
        notes     : ( data?.notes     ? createIngredientNoteList(  data?.notes ?? undefined                  ) : undefined ),
        profileType : ( data?.profileType ? new FormControl< string | null >( data?.profileType ?? null ) : undefined),
        data      : ( profileType      ? createIngredientDataGroup(
                                                                    data.profileType, data.data

                                                                 ) :
                        undefined
                    ),

        locations : createLocationsArray( data? data.locations : undefined )

    });*/



}