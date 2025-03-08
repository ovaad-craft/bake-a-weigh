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



import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  providers: [
    {
      provide     : NG_VALUE_ACCESSOR,
      useExisting : forwardRef( () => TextInputComponent ),
      multi       : true
    }
  ]
})
export class TextInputComponent implements OnInit, ControlValueAccessor {



  @Input() label!: string;
  @Input() InputSize = '';
  //SizeClass: string = 'smallInput';
  
  field  = '';

  ngOnInit():void{ this.setInputSize(); }

  onChange : any = () =>{/* */};
  onTouch : any = () => {/* */};

  set value(val : string){
    this.field = val;
    this.onChange(val);
    this.onTouch(val);
  }

  writeValue(value: string){ this.value = value; }

  registerOnChange(fn: any){ this.onChange = fn; }

  registerOnTouched(onTouched: Function){ this.onTouch = onTouched; }

  setInputSize() : void {/* */}



}
