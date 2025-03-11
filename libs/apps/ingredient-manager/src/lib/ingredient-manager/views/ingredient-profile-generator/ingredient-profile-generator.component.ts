/*

Ingredient Profile Generator


Purpose:
> Allows user to create a new ingredient profile.


Elements:


Views:


Routes To:


Interactivity:


Funtionality:


User Story:

*/







import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientDataGroupType } from '../ingredient-editor/form-generator/form-types';
import { ReactiveFormsModule } from '@angular/forms';
import { IngredientProfileType } from '@bake-a-weigh/site-types';

@Component({
  selector: 'lib-ingredient-profile-generator',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './ingredient-profile-generator.component.html',
  styleUrl: './ingredient-profile-generator.component.css',
})
export class IngredientProfileGeneratorComponent {

  @Input() Control!   : IngredientDataGroupType;
  @Input() GroupType! : IngredientProfileType;
}
