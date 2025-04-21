/*

ElementWeight

PURPOSE :

VIEWS :

ELEMENTS :

INTERACTIVITY :

GETS DATA FROM :

SENDS DATA TO :

USER STORIES :

*/

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule }             from '@angular/common';
import { Nutrient, WeightType }               from '@bake-a-weigh/site-types';
import { NutrientGroupType }        from '../../../views/ingredient-editor/form-generator/form-types';
import { FormControl, FormGroup, ReactiveFormsModule }                    from '@angular/forms';
import { NumberInputComponent, SelectButtonsInputComponent, TextInputComponent } from '@form-controls';

@Component({
  selector : 'lib-element-weight',
  imports  : [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    NumberInputComponent,
    SelectButtonsInputComponent
  ],
  templateUrl : './element-weight.component.html',
  styleUrls   : [ './element-weight.component.css' ],
})
export class ElementWeightComponent implements OnInit {

  @Input() Control! : FormGroup< NutrientGroupType >;

  WeightType    : WeightType = 'g';
  WeightOptions : WeightType[] = [ 'g','mcg','mg','ml' ];

  ControlToggle = false;
  PercentageToggle = false;
  PreviousAmount!   : Nutrient;



  ngOnInit() : void {
      
    if( this.Control.controls.percentage ){ this.PercentageToggle = true; }

    if( this.Control.controls.name.value === null ){

      this.Control.controls.amount.setValue( 0 );
      this.Control.controls.weightType.setValue( 'g' );
      this.toggleControlOn();

    }

  }



  toggleControlOn() : void {
    
    this.PreviousAmount = this.Control.value as Nutrient;
    this.ControlToggle = true;

  }

  toggleControlOff( update : boolean ) : void {

    if( !update && this.PreviousAmount !== undefined ) {

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



  addPercentage() : void {

    this.Control.addControl( 'percentage', new FormControl< number | null >( null ) );

    this.PercentageToggle = true;

  }



  removePercentage() : void {

    this.Control.removeControl( 'percentage' );

    this.PercentageToggle = false;

  }



}
