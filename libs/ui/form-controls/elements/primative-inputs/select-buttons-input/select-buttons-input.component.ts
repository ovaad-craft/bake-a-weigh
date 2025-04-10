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

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-select-buttons-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './select-buttons-input.component.html',
  styleUrls: ['./select-buttons-input.component.css'],
})
export class SelectButtonsInputComponent< ValueType > implements OnInit {

  @Input() OptionType! : ValueType;
  @Input() OptionList! : ValueType[];
  @Input() Control!    : FormControl< ValueType | null >;
  @Input() Label!      : string;
  @Input() FontSize = 'var( --text-caption-1 )'

  ButtonWidth = 0;



  ngOnInit(): void { this.findButtonWidth(); }



  updateValue( value : ValueType ) : void {

    this.Control.setValue( value );

  }

  findButtonWidth() : void {

    let width = 0;

    this.OptionList.forEach( a => {

      const text = a as string;
      const textLength : number = text.split('').length;
      
      if( textLength > width ) { width = textLength; }

    });

    console.log(width);

    this.ButtonWidth = width;

  }
  
}
