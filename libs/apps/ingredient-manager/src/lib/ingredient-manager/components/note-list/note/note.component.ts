/*

Note

PURPOSE :

VIEWS :

ELEMENTS :

INTERACTIVITY :

GETS DATA FROM :

SENDS DATA TO :

USER STORIES :

*/

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from '@form-controls';
import { IngredientNoteFormGroup } from '../../../views/ingredient-editor/form-generator/form-types';

@Component({
  selector: 'lib-note',
  imports: [CommonModule, ReactiveFormsModule, TextInputComponent],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {

  @Input() Control! : FormGroup< IngredientNoteFormGroup >;
  
}
