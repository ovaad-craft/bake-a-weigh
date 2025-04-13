/*

TotalFat

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

import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { NutrientCategoryGroup, TotalFatCategoryGroup } from '../../../views/ingredient-editor/form-generator/form-types';
import { WeightComponent } from '../weight/weight.component';
import { ElementWeightType } from '@bake-a-weigh/site-types';
import { NumberInputComponent } from '@form-controls';

@Component({
  selector: 'lib-total-fat',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WeightComponent,
    NumberInputComponent
  ],
  templateUrl: './total-fat.component.html',
  styleUrls: ['./total-fat.component.css'],
})
export class TotalFatComponent {

  @Input() Control! : FormGroup< TotalFatCategoryGroup >;
  @Input() Label!   : string;



  ControlToggle = false;
  PreviousTotalAmount! : ElementWeightType;

  SaturatedFatToggle = false;
  PreviousSaturatedFatAmount! : ElementWeightType;

  TransFatToggle = false;
  PreviousTransFatsAmount! : ElementWeightType;

  MonounsaturatedFatToggle = false;
  PreviousMonounsaturatedFatAmount! : ElementWeightType;

  PolyunsaturatedFatToggle = false;
  PreviousPolyunsaturatedFatAmount! : ElementWeightType



  toggleControlOn() : void {
  
    this.PreviousSaturatedFatAmount = this.Control.value.totalAmount as ElementWeightType;
    this.ControlToggle = true;
  
  }
  
  toggleControlOff( update : boolean ) : void {
  
    if( !update ) { this.Control.controls.totalAmount.setValue( this.PreviousSaturatedFatAmount ); }
  
    this.ControlToggle = false;

  }
  
  
  
  toggleSaturatedFatOn() : void {
  
    this.PreviousSaturatedFatAmount = this.Control.value.saturatedFat as ElementWeightType;
    this.SaturatedFatToggle = true;
  
  }
  
  toggleSaturatedFatOff( update : boolean ) : void {
  
    if( !update ) { this.Control.controls.saturatedFat!.setValue( this.PreviousSaturatedFatAmount ); }
  
    this.SaturatedFatToggle = false;

  }
  
  
  
  toggleTransFatOn() : void {
  
    this.PreviousTransFatsAmount = this.Control.value.transFat as ElementWeightType;
    this.TransFatToggle = true;
  
  }
  
  toggleTransFatOff( update : boolean ) : void {
  
    if( !update ) { this.Control.controls.transFat!.setValue( this.PreviousTransFatsAmount ); }
  
    this.TransFatToggle = false;

  }
  
  
  
  toggleMonounsaturatedFatOn() : void {
  
    this.PreviousMonounsaturatedFatAmount = this.Control.value.monounsaturatedFat as ElementWeightType;
    this.MonounsaturatedFatToggle = true;
  
  }
  
  toggleMonounsaturatedFatOff( update : boolean ) : void {
  
    if( !update ) { this.Control.controls.monounsaturatedFat!.setValue( this.PreviousMonounsaturatedFatAmount ); }
  
    this.MonounsaturatedFatToggle = false;

  }
  
  
  
  togglePolyunsaturatedFatOn() : void {
  
    this.PreviousTotalAmount = this.Control.value.monounsaturatedFat as ElementWeightType;
    this.MonounsaturatedFatToggle = true;
  
  }
  
  togglePolyunsaturatedFatOff( update : boolean ) : void {
  
    if( !update ) { this.Control.controls.monounsaturatedFat!.setValue( this.PreviousTotalAmount ); }
  
    this.MonounsaturatedFatToggle = false;

  }
  

}
