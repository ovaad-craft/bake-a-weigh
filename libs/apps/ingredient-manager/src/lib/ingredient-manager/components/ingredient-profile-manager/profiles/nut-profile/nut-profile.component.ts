/*

NutProfile

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
import { NutProfileGroup } from '../../../../views/ingredient-editor/form-generator/form-types';
import { TextInputComponent, ToggleInputComponent } from '@form-controls';

@Component({
  selector: 'lib-nut-profile',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    ToggleInputComponent
  ],
  templateUrl: './nut-profile.component.html',
  styleUrls: ['./nut-profile.component.css'],
})
export class NutProfileComponent {
  @Input() Label = 'item label';
  @Input() Control!: FormGroup<NutProfileGroup>;
}
