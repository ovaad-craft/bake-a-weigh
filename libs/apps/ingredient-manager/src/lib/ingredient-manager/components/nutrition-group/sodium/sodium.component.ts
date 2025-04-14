/*

Sodium

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

import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ElementWeightGroupType } from '../../../views/ingredient-editor/form-generator/form-types';
import { ElementWeightType } from '@bake-a-weigh/site-types';
import { WeightComponent } from '../weight/weight.component';

@Component({
  selector: 'lib-sodium',
  imports: [CommonModule, ReactiveFormsModule, WeightComponent],
  templateUrl: './sodium.component.html',
  styleUrls: ['./sodium.component.css'],
})
export class SodiumComponent {


  @Input() Control! : FormGroup< ElementWeightGroupType >;
  @Input() Label!   : string;



  PreviousAmount! : ElementWeightType;
  ControlToggle = false;
  
  
  
  toggleControlOn() : void {
  
    this.PreviousAmount = this.Control.value as ElementWeightType;
    this.ControlToggle = true;
  
  }
  
  
  
  toggleControlOff( update : boolean ) : void {
  
    if( !update ) {

      if( this.Control.controls.percentage === undefined && this.PreviousAmount.percentage !== undefined) {
            
        this.Control.addControl( 'percentage', new FormControl< number | null >( null) );     
              
      }

      if( this.Control.controls.percentage !== undefined && this.PreviousAmount.percentage === undefined ){

        this.Control.removeControl( 'percentage' );
        
      }


      this.Control.setValue( this.PreviousAmount );

    }
  
    this.ControlToggle = false;
  
  }


}
