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
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-ingredient-list',
  imports: [CommonModule],
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css'],
})
export class IngredientListComponent {

  @Input()Control! : FormArray<FormControl< string | null > >;

  @Input()Label? : string;



  addIngredient() : void {

    const newControl : FormControl< string | null > = new FormControl< string | null >('');

    this.Control.controls.push( newControl );

  }

  removeIngredient(index : number) : void {

    this.Control.removeAt(index);

  }


  
}
