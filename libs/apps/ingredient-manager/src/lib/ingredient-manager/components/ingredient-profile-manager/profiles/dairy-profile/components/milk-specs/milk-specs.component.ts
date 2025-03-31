/*

MilkSpecs

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
import { MilkSpecsGroup } from '../../../../../../views/ingredient-editor/form-generator/form-types';
import { MilkState, MilkType } from '@bake-a-weigh/site-types';
import { SelectInputComponent } from '@form-controls';

@Component({
  selector: 'lib-milk-specs',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectInputComponent

  ],
  templateUrl: './milk-specs.component.html',
  styleUrls: ['./milk-specs.component.css'],
})
export class MilkSpecsComponent {
  @Input() Control!: FormGroup<MilkSpecsGroup>;
  @Input() Label!: string;
  
  TypeSelect  : MilkType = 'low fat';
  StateSelect : MilkState = 'liquid';
}
