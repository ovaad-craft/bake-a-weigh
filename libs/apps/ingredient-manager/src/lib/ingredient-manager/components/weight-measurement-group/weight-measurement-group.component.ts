/*

WeightMeasurementGroup

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
import { NumberInputComponent, SelectInputComponent } from '@form-controls';
import { WeightType } from '@bake-a-weigh/site-types';
import { WeightMeasurementPrimative } from '../../views/ingredient-editor/form-generator/form-types';

@Component({
  selector: 'lib-weight-measurement-group',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NumberInputComponent,
    SelectInputComponent

  ],
  templateUrl: './weight-measurement-group.component.html',
  styleUrls: ['./weight-measurement-group.component.css'],
})
export class WeightMeasurementGroupComponent {
  @Input() Control!: FormGroup< WeightMeasurementPrimative >;
  @Input() Label!: string;


  WeightTypeSelection : WeightType = 'g';
}
