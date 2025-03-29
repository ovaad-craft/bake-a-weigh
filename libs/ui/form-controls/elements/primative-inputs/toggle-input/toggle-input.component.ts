/*

ToggleInput

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

import { FormsModule, FormControl } from '@angular/forms';
import { boolean } from 'undefined';

@Component({
  selector: 'lib-toggle-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './toggle-input.component.html',
  styleUrls: ['./toggle-input.component.css'],
})
export class ToggleInputComponent {
  @Input() Control!: FormControl<boolean | null>;
  @Input() Label!: string;
}
