/*

CreamSpecs

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
import { CreamSpecsGroup } from '../../../../../../views/ingredient-editor/form-generator/form-types';

@Component({
  selector: 'lib-cream-specs',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cream-specs.component.html',
  styleUrls: ['./cream-specs.component.css'],
})
export class CreamSpecsComponent {
  @Input() Control!: FormGroup<CreamSpecsGroup>;
  @Input() Label!: string;
}
