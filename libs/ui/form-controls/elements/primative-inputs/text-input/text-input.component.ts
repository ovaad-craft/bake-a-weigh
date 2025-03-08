/*

TextInput

PURPOSE :

VIEWS :

ELEMENTS :

INTERACTIVITY :

GETS DATA FROM :

SENDS DATA TO :

USER STORIES :

*/



import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-text-input',
  templateUrl: './text-input.component.html',
  imports: [ CommonModule, FormsModule],
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {



  @Input() label!: string;
  @Input() InputSize = 4;
  @Input() ControlName = '';
  @Input() Control!: FormControl<string | null>;



}
