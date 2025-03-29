/*

MilkSpecs

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
import { MilkSpecsGroup } from '../../../../../../views/ingredient-editor/form-generator/form-types';

@Component({
  selector: 'lib-milk-specs',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './milk-specs.component.html',
  styleUrls: ['./milk-specs.component.css'],
})
export class MilkSpecsComponent {
  @Input() Control!: FormGroup<MilkSpecsGroup>;
  @Input() Label!: string;
}
