import { Directive, HostListener, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[libBwControl]',
  providers: [
    {
      provide     : NG_VALUE_ACCESSOR,
      useExisting : forwardRef(() => BWControlDirective),
      multi       : true
    }
  ]
})
export class BWControlDirective implements ControlValueAccessor {
  @Input() value : any;

  private onChange  : ( value : any ) => void = () => {};
  private onTouched : () => void = () => {};

  writeValue( value : any ) : void {
    this.value = value;
  }

  registerOnChange( fn : ( value : any ) => void ) : void {
    this.onChange = fn;
  }

  registerOnTouched( fn : () => void ) : void {
    this.onTouched = fn;
  }

  @HostListener( 'input', [ '$event.target.value' ] )
  handleInput( value : any ) : void {
    this.onChange( value );
    this.onTouched();
  }
}