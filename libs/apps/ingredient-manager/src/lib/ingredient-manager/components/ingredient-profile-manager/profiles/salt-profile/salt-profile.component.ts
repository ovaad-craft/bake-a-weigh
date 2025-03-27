/*

SaltProfile

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
import { SaltProfileGroup } from '../../../../views/ingredient-editor/form-generator/form-types';

@Component({
  selector: 'lib-salt-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './salt-profile.component.html',
  styleUrls: ['./salt-profile.component.css'],
})
export class SaltProfileComponent {
  @Input() Label = 'item label';
  @Input() Control!: FormGroup<SaltProfileGroup>;
}
