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

@Component({
  selector: 'lib-sugar-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sugar-profile.component.html',
  styleUrls: ['./sugar-profile.component.css'],
})
export class SugarProfileComponent {
  @Input() Label = 'item label';
  @Input() Control! : FormGroup< SugarProfileGroup >;
}
