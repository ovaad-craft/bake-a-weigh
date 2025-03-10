/*

ServingSize

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
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElementWeightGroupType } from '../../../views/ingredient-editor/form-generator/form-types';
import { NumberInputComponent, SelectInputComponent } from '@form-controls';
import { WeightType } from '@bake-a-weigh/site-types';

@Component({
  selector: 'lib-serving-size',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NumberInputComponent,
    SelectInputComponent
  ],
  templateUrl: './serving-size.component.html',
  styleUrls: ['./serving-size.component.css'],
})
export class ServingSizeComponent {

  @Input()Control! : FormGroup< ElementWeightGroupType >;

  WeightOptions : WeightType[] = ['g','mcg','mg','ml'];

}
