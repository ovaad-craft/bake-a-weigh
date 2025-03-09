/*

IngredientList

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
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from '@form-controls';
import { FormArrayControlList } from '../../../views/ingredient-editor/form-generator/form-types';

@Component({
  selector: 'lib-ingredient-list',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TextInputComponent],
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css'],
})
export class IngredientListComponent {

  @Input()Control! : FormGroup< FormArrayControlList< string > >;

  @Input()Label?   : string;



  addIngredient() : void {

    this.Control.controls.list.push( new FormControl< string | null >('') );

  }

  removeIngredient( index : number ) : void {

    this.Control.controls.list.removeAt( index );

  }



}
