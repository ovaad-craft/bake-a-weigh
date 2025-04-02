/*

ProduceProfile

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
import { ProduceProfileGroup } from '../../../../views/ingredient-editor/form-generator/form-types';
import { SelectInputComponent } from '@form-controls';
import { ProduceState, ProduceType } from '@bake-a-weigh/site-types';

@Component({
  selector: 'lib-produce-profile',
  imports: [CommonModule, ReactiveFormsModule, SelectInputComponent],
  templateUrl: './produce-profile.component.html',
  styleUrls: ['./produce-profile.component.css'],
})
export class ProduceProfileComponent {
  @Input() Label = 'item label';
  @Input() Control!: FormGroup< ProduceProfileGroup >;

  ProduceTypeSelection  : ProduceType  = 'fruit';
  ProduceStateSelection : ProduceState = 'fresh';
}
