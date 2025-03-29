/*

GrainProfile

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
import { GrainProfileGroup } from '../../../../views/ingredient-editor/form-generator/form-types';

@Component({
  selector: 'lib-grain-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './grain-profile.component.html',
  styleUrls: ['./grain-profile.component.css'],
})
export class GrainProfileComponent {
  @Input() Label = 'item label';
  @Input() Control!: FormGroup<GrainProfileGroup>;
}
