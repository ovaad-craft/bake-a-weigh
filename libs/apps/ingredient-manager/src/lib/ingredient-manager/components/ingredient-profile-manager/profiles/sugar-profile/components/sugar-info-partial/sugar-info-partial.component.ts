/*

SugarInfoPartial

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
import { SugarInfoPartial } from '../../../../../../views/ingredient-editor/form-generator/form-types';
import { SelectInputComponent } from '@form-controls';
import { SugarConsistencyType } from '@bake-a-weigh/site-types';

@Component({
  selector: 'lib-sugar-info-partial',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectInputComponent
  ],
  templateUrl: './sugar-info-partial.component.html',
  styleUrls: ['./sugar-info-partial.component.css'],
})
export class SugarInfoPartialComponent {
  @Input() Control! : FormGroup< SugarInfoPartial >;
  @Input() Label!   : string;

  SugarConsistencyOptions : SugarConsistencyType = 'small granules';
}
