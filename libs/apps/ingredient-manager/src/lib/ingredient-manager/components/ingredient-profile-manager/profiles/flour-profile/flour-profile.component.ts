/*

FlourProfile

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
import { FlourProfileGroup } from '../../../../views/ingredient-editor/form-generator/form-types';
import { NumberInputComponent, SelectInputComponent, ToggleInputComponent } from '@form-controls';
import { FlourClassification, FlourType } from '@bake-a-weigh/site-types';
import { NutrientTrackerComponent } from '../../../../views/ingredient-editor/form-generator/primatives/multi-value/nutrient-tracker/nutrient-tracker.component';

@Component({
  selector: 'lib-flour-profile',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectInputComponent,
    ToggleInputComponent,
    NutrientTrackerComponent,
    NumberInputComponent
  ],
  templateUrl: './flour-profile.component.html',
  styleUrls: ['./flour-profile.component.css'],
})
export class FlourProfileComponent {
  @Input() Label = 'item label';
  @Input() Control!: FormGroup< FlourProfileGroup >;

  FlourTypeSelection : FlourType = 'wheat';
  FlourClassificationSelection : FlourClassification = '0'
}
