/*

SelectButtons

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
import {} from 'undefined';

@Component({
  selector: 'lib-select-buttons',
  imports: [CommonModule, FormsModule],
  templateUrl: './select-buttons.component.html',
  styleUrls: ['./select-buttons.component.css'],
})
export class SelectButtonsComponent {
  @Input() Control!: FormControl<null>;
  @Input() Label!: string;
}
