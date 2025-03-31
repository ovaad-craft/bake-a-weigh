/*

CheeseSpecs

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
import { CheeseSpecsGroup } from '../../../../../../views/ingredient-editor/form-generator/form-types';
import { SelectInputComponent, TextInputComponent } from '@form-controls';

@Component({
  selector: 'lib-cheese-specs',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    SelectInputComponent

  ],
  templateUrl: './cheese-specs.component.html',
  styleUrls: ['./cheese-specs.component.css'],
})
export class CheeseSpecsComponent {
  @Input() Control!: FormGroup<CheeseSpecsGroup>;
  @Input() Label!: string;
}
