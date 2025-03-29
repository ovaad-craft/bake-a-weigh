/*

DairyProfile

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
import { DairyProfileGroup } from '../../../../views/ingredient-editor/form-generator/form-types';
import { SelectInputComponent, ToggleInputComponent } from '@form-controls';

@Component({
  selector: 'lib-dairy-profile',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectInputComponent,
    ToggleInputComponent

  ],
  templateUrl: './dairy-profile.component.html',
  styleUrls: ['./dairy-profile.component.css'],
})
export class DairyProfileComponent {
  @Input() Label = 'item label';
  @Input() Control!: FormGroup<DairyProfileGroup>;
}
