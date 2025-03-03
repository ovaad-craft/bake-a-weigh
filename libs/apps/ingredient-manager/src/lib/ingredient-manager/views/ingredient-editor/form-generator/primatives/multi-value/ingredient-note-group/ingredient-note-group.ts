import { FormControl, FormGroup } from "@angular/forms";
import { IngredientNote }         from "@bake-a-weigh/site-types";
import { IngredientNoteFormGroup } from "../../../form-types";



export function createIngredientNoteGroup( defaultGroup? : IngredientNote ) : FormGroup< IngredientNoteFormGroup > {



    return new FormGroup< IngredientNoteFormGroup >({

        title       : new FormControl< string >( defaultGroup ? defaultGroup.title       : '', { nonNullable : true } ),
        description : new FormControl< string >( defaultGroup ? defaultGroup.description : '', { nonNullable : true } )

    });



}