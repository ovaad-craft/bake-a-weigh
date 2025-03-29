/*

YogurtSpecs

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
import { YogurtSpecsGroup } from '../../../../../../views/ingredient-editor/form-generator/form-types';

@Component({
  selector: 'lib-yogurt-specs',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './yogurt-specs.component.html',
  styleUrls: ['./yogurt-specs.component.css'],
})
export class YogurtSpecsComponent {
  @Input() Control!: FormGroup<YogurtSpecsGroup>;
  @Input() Label!: string;
}
