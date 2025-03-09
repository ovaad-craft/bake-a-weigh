/*

NumberInput

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
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-number-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css'],
})
export class NumberInputComponent {

  @Input()Control! : FormControl< number | null >;
  @Input()Label?   : string;
  @Input()InputSize = 4;
}
