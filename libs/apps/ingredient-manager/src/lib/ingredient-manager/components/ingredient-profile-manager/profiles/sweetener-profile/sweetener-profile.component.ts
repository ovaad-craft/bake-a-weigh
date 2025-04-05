/*

SweetenerProfile

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
import { SweetenerProfileGroup } from '../../../../views/ingredient-editor/form-generator/form-types';
import { SelectInputComponent, TextInputComponent } from '@form-controls';
import { SweetenerFormType } from '@bake-a-weigh/site-types';

@Component({
  selector: 'lib-sweetener-profile',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectInputComponent,
    TextInputComponent
  ],
  templateUrl: './sweetener-profile.component.html',
  styleUrls: ['./sweetener-profile.component.css'],
})
export class SweetenerProfileComponent {
  @Input() Label = 'item label';
  @Input() Control!: FormGroup< SweetenerProfileGroup >;

  SweetenerFormOptions : SweetenerFormType = 'liquid';
}
