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

@Component({
  selector: 'lib-select-buttons-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './select-buttons-input.component.html',
  styleUrls: ['./select-buttons-input.component.css'],
})
export class SelectButtonsInputComponent< ValueType > {

  @Input() OptionType! : ValueType;
  @Input() OptionList! : ValueType[];
  @Input() Control!    : FormControl< ValueType | null >;
  @Input() Label!      : string;



  updateValue( value : ValueType ) : void {

    this.Control.setValue( value );

  }
  
}
