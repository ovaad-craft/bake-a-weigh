/*

NutrientCategory

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
import { NutrientCategoryGroup } from '../../../views/ingredient-editor/form-generator/form-types';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from '@form-controls';
import { ElementWeightComponent } from '../element-weight/element-weight.component';

@Component({
  selector: 'lib-nutrient-category',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    ElementWeightComponent
  ],
  templateUrl: './nutrient-category.component.html',
  styleUrls: ['./nutrient-category.component.css'],
})
export class NutrientCategoryComponent {

  @Input() Control! : FormGroup< NutrientCategoryGroup >;

  NameToggle      = false;
  NutrientsToggle = false;

}
