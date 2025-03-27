import { FormArray, FormGroup }      from "@angular/forms";
import { IngredientNote }            from "@bake-a-weigh/site-types";
import { FormArrayGroupList, IngredientNoteFormGroup }   from "../../../form-types";
import { createIngredientNoteGroup } from "../ingredient-note-group/ingredient-note-group";





export function createIngredientNoteList( defaultNotes? : IngredientNote[] ) : FormGroup< FormArrayGroupList< IngredientNoteFormGroup > > {



    const group : FormGroup< FormArrayGroupList< IngredientNoteFormGroup > > = new FormGroup< FormArrayGroupList< IngredientNoteFormGroup > >({
        
        list : new FormArray< FormGroup< IngredientNoteFormGroup > >([])

    });

    

    if( defaultNotes ) { defaultNotes.forEach( a => group.controls.list.push( createIngredientNoteGroup( a ) ) ); }



    return group;



}