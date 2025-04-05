/*

SugarProfile

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
import { SugarProfileGroup } from '../../../../views/ingredient-editor/form-generator/form-types';
import { SelectInputComponent, TextInputComponent } from '@form-controls';
import { SugarType } from '@bake-a-weigh/site-types';
import { SugarInfoComponent } from './components/sugar-info/sugar-info.component';

@Component({
  selector: 'lib-sugar-profile',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectInputComponent,
    TextInputComponent,
    SugarInfoComponent
  ],
  templateUrl: './sugar-profile.component.html',
  styleUrls: ['./sugar-profile.component.css'],
})
export class SugarProfileComponent {
  @Input() Label = 'item label';
  @Input() Control! : FormGroup< SugarProfileGroup >;

  SugarTypeOptions : SugarType = 'other'
}
