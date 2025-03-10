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
import { WeightType }               from '@bake-a-weigh/site-types';
import { NutrientGroupType }        from '../../../views/ingredient-editor/form-generator/form-types';
import { FormControl, FormGroup, ReactiveFormsModule }                    from '@angular/forms';
import { NumberInputComponent, SelectInputComponent, TextInputComponent } from '@form-controls';

@Component({
  selector : 'lib-element-weight',
  imports  : [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    NumberInputComponent,
    SelectInputComponent
  ],
  templateUrl : './element-weight.component.html',
  styleUrls   : [ './element-weight.component.css' ],
})
export class ElementWeightComponent implements OnInit {

  @Input() Control! : FormGroup< NutrientGroupType >;

  WeightOptions : WeightType[] = [ 'g','mcg','mg','ml' ];

  PercentageToggle = false;



  ngOnInit() : void {
      
    if( this.Control.controls.percentage ){ this.PercentageToggle = true; }

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
