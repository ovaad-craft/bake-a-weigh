/*

ExtractProfile

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
import { ExtractProfileGroup } from '../../../../views/ingredient-editor/form-generator/form-types';

@Component({
  selector: 'lib-extract-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './extract-profile.component.html',
  styleUrls: ['./extract-profile.component.css'],
})
export class ExtractProfileComponent {
  @Input() Label = 'item label';
  @Input() Control!: FormGroup<ExtractProfileGroup>;
}
