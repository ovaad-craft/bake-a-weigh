/*

NoteList

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
import { NoteComponent } from './note/note.component';
import { FormArrayGroupList, IngredientNoteFormGroup } from '../../views/ingredient-editor/form-generator/form-types';
import { createIngredientNoteGroup } from '../../views/ingredient-editor/form-generator/primatives/multi-value/ingredient-note-group/ingredient-note-group';

@Component({
  selector: 'lib-note-list',
  imports: [CommonModule, ReactiveFormsModule, NoteComponent],
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent {

  @Input() Control! : FormGroup< FormArrayGroupList< IngredientNoteFormGroup > >;



  addNote() : void {

    this.Control.controls.list.push( createIngredientNoteGroup() );

  }



  deleteNote( index : number ) : void {

    this.Control.controls.list.removeAt( index );
    
  }




}
