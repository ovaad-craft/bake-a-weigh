/*

SeedProfile

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
import { SpeciesPrimative } from '../../../../views/ingredient-editor/form-generator/form-types';
import { TextInputComponent } from '@form-controls';

@Component({
  selector: 'lib-seed-profile',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent    
  ],
  templateUrl: './seed-profile.component.html',
  styleUrls: ['./seed-profile.component.css'],
})
export class SeedProfileComponent {
  @Input() Control! : FormGroup< SpeciesPrimative >;
  @Input() Label!   : string;
}
