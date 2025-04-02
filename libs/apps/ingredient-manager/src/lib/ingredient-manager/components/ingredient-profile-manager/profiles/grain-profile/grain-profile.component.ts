/*

GrainProfile

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
import { GrainProfileGroup } from '../../../../views/ingredient-editor/form-generator/form-types';
import { NutrientTrackerComponent } from '../../../../views/ingredient-editor/form-generator/primatives/multi-value/nutrient-tracker/nutrient-tracker.component';
import { NumberInputComponent } from '@form-controls';

@Component({
  selector: 'lib-grain-profile',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NutrientTrackerComponent,
    NumberInputComponent
  ],
  templateUrl: './grain-profile.component.html',
  styleUrls: ['./grain-profile.component.css'],
})
export class GrainProfileComponent {
  @Input() Label = 'item label';
  @Input() Control!: FormGroup<GrainProfileGroup>;
}
