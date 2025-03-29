/*

OilProfile

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
import { OilProfileGroup } from '../../../../views/ingredient-editor/form-generator/form-types';

@Component({
  selector: 'lib-oil-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './oil-profile.component.html',
  styleUrls: ['./oil-profile.component.css'],
})
export class OilProfileComponent {
  @Input() Label = 'item label';
  @Input() Control!: FormGroup<OilProfileGroup>;
}
