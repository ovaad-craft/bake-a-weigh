/*

SugarInfoGroup

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
import { CaneInfoGroup } from '../../../../../../views/ingredient-editor/form-generator/form-types';
import { SelectInputComponent } from '@form-controls';
import { CaneType, SugarConsistencyType } from '@bake-a-weigh/site-types';

@Component({
  selector: 'lib-sugar-info-group',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectInputComponent
  ],
  templateUrl: './sugar-info-group.component.html',
  styleUrls: ['./sugar-info-group.component.css'],
})
export class SugarInfoGroupComponent {
  @Input() Control! : FormGroup< CaneInfoGroup >;
  @Input() Label!   : string;

  SugarConsistencyOptions : SugarConsistencyType = 'small granules';
  SugarTypeOptions : CaneType = 'raw';
}
