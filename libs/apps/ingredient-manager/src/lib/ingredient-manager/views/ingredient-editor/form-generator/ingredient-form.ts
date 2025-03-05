import { FormControl, FormGroup }    from "@angular/forms";
import { IngredientProfile }         from "@bake-a-weigh/site-types";
import { IngredientForm }            from "./form-types";
import { createIngredientNoteList }  from "./primatives/multi-value/ingredient-note-list/ingredient-note-list";
import { createIngredientDataGroup } from "./primatives/multi-value/ingredient-data-group/ingredient-data-group";
import { createLocationsArray }      from "./primatives/multi-value/location-list/location-list";
import { createNutritionGroup }      from "./primatives/multi-value/nutrition/nutrition-group/nutrition-group";





export function createIngredientForm( data? : IngredientProfile ) : FormGroup< IngredientForm > {

    

    return new FormGroup< IngredientForm >({

        name      : new FormControl< string | null >( data ? data.name  : null ),
        brand     : new FormControl< string | null >( data ? data.brand : null ),
        id        : new FormControl< string | null >( data ? data.id    : null ),

        photo     : ( data?.photo ? new FormControl< string | null >( data.photo ) : undefined ),
        icon      : ( data?.icon  ? new FormControl< string | null >( data.icon  ) : undefined ),

        nutrition : ( data?.nutrition ? createNutritionGroup(      data.nutrition              ) : undefined ),
        notes     : ( data?.notes     ? createIngredientNoteList(  data.notes                  ) : undefined ),
        data      : ( data?.data      ? createIngredientDataGroup( data.profileType, data.data ) : undefined ),

        locations : createLocationsArray( data? data.locations : undefined )

    });



}