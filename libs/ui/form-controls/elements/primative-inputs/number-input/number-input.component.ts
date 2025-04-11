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
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-number-input',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css'],
})
export class NumberInputComponent {

  @Input()Control!  : FormControl< number | null >;
  @Input()Label?    : string;
  @Input()FontSize! : string;
  @Input()LabelFontSize! : string;
  @Input()InputSize = 4;



  handleZero() : void {

    const value : string[] = this.Control.value!.toString().split('');

    if( value.length > 1 && value[ 0 ] === '0' && value[ 1 ] !== '.' ){
      
      value.shift();

      this.Control.setValue( Number( value.join('') ) );

    }

  }



  
}
