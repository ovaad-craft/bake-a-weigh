/*

TotalCarbohydratesGroup

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

import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TotalCarbohydratesGroup } from '../../../views/ingredient-editor/form-generator/form-types';

@Component({
  selector: 'lib-total-carbohydrates-group',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './total-carbohydrates-group.component.html',
  styleUrls: ['./total-carbohydrates-group.component.css'],
})
export class TotalCarbohydratesGroupComponent {
  @Input() Control! : FormGroup< TotalCarbohydratesGroup >;
  @Input() Label!   : string;
}
