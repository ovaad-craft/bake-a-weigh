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

import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-select-input',
  imports : [ ReactiveFormsModule ],
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
})
export class SelectInputComponent<ValueType> {

  @Input() OptionType! : ValueType;
  @Input() OptionList! : ValueType[];
  @Input() Control!    : FormControl< ValueType | null>;
  
}
