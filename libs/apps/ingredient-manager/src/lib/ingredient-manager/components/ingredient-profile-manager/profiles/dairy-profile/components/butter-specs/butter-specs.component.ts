/*

ButterSpecs

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
import { ButterSpecsGroup } from '../../../../../../views/ingredient-editor/form-generator/form-types';

@Component({
  selector: 'lib-butter-specs',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './butter-specs.component.html',
  styleUrls: ['./butter-specs.component.css'],
})
export class ButterSpecsComponent {
  @Input() Control!: FormGroup<ButterSpecsGroup>;
  @Input() Label!: string;
}
