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
}
