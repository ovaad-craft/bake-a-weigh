import { FormArray, FormGroup }      from "@angular/forms";
import { IngredientNote }            from "@bake-a-weigh/site-types";
import { IngredientNoteFormGroup }   from "../../../form-types";
import { createIngredientNoteGroup } from "../ingredient-note-group/ingredient-note-group";





export function createIngredientNoteList( defaultNotes? : IngredientNote[] ) : FormArray< FormGroup< IngredientNoteFormGroup > > {



    const list : FormArray< FormGroup< IngredientNoteFormGroup > > = new FormArray< FormGroup< IngredientNoteFormGroup > >([]);

    if( defaultNotes ) { defaultNotes.forEach( a => list.push( createIngredientNoteGroup( a ) ) ); }



    return list;



}