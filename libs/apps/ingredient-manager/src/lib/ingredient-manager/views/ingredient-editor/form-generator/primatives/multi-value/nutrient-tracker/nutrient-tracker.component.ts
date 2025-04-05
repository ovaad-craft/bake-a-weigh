/*

NutrientTracker

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
import { NutrientTrackerGroup } from '../../../form-types';
import { TextInputComponent } from '@form-controls';
import { WeightMeasurementGroupComponent } from '../../../../../../components/weight-measurement-group/weight-measurement-group.component';

@Component({
  selector: 'lib-nutrient-tracker',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    WeightMeasurementGroupComponent

  ],
  templateUrl: './nutrient-tracker.component.html',
  styleUrls: ['./nutrient-tracker.component.css'],
})
export class NutrientTrackerComponent {
  @Input() Control! : FormGroup< NutrientTrackerGroup >;
  @Input() Label!   : string;

  
}
