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

@Component({
  selector: 'lib-flour-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flour-profile.component.html',
  styleUrls: ['./flour-profile.component.css'],
})
export class FlourProfileComponent {
  @Input() Label = 'item label';
  @Input() Control!: FormGroup<FlourProfileGroup>;
}
