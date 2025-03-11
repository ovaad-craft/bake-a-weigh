/*

TextArea

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
  selector: 'lib-text-area',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
})
export class TextAreaComponent {

  @Input() Control! : FormControl< string | null >;
  @Input() Label! : string;
}
