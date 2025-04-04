/*

SaltProfile

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
import { SaltProfileGroup } from '../../../../views/ingredient-editor/form-generator/form-types';
import { SelectInputComponent, ToggleInputComponent } from '@form-controls';
import { NutrientTrackerComponent } from '../../../../views/ingredient-editor/form-generator/primatives/multi-value/nutrient-tracker/nutrient-tracker.component';
import { SaltConsistency, SaltType } from '@bake-a-weigh/site-types';

@Component({
  selector: 'lib-salt-profile',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectInputComponent,
    ToggleInputComponent,
    NutrientTrackerComponent    
  ],
  templateUrl: './salt-profile.component.html',
  styleUrls: ['./salt-profile.component.css'],
})
export class SaltProfileComponent {
  @Input() Label = 'item label';
  @Input() Control!: FormGroup< SaltProfileGroup >;

  SaltTypeSelection        : SaltType        = 'other';
  SaltConsistencySelection : SaltConsistency = 'other';
}
