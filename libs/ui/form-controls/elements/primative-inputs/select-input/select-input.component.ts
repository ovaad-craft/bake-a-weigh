/*

SelectInput

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
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-select-input',
  imports : [ CommonModule, FormsModule ],
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
})
export class SelectInputComponent<ValueType> {

  @Input() OptionType! : ValueType;
  @Input() OptionList! : ValueType[];
  @Input() Control!    : FormControl< ValueType | null>;
  @Input() Label!      : string;

  ToggleOptions = false;

  updateValue(value : ValueType) : void {

    this.Control.setValue(value);
    this.ToggleOptions = false;

  }

  toggleOptions(){ this.ToggleOptions = !this.ToggleOptions; }
  
}
