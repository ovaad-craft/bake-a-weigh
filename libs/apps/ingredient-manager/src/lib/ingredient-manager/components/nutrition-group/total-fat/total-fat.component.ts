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

import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ElementWeightGroupType, NutrientCategoryGroup, TotalFatCategoryGroup } from '../../../views/ingredient-editor/form-generator/form-types';
import { WeightComponent } from '../weight/weight.component';
import { ElementWeightType } from '@bake-a-weigh/site-types';
import { NumberInputComponent } from '@form-controls';
import { createElementWeightGroup } from '../../../views/ingredient-editor/form-generator/primatives/multi-value/element-weight-group/element-weight-group';

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
  PreviousTransFatAmount! : ElementWeightType;

  MonounsaturatedFatToggle = false;
  PreviousMonounsaturatedFatAmount! : ElementWeightType;

  PolyunsaturatedFatToggle = false;
  PreviousPolyunsaturatedFatAmount! : ElementWeightType



  toggleControlOn() : void {
  
    this.PreviousTotalAmount = this.Control.value.totalAmount as ElementWeightType;
    this.ControlToggle = true;
  
  }
  
  toggleControlOff( update : boolean ) : void {
  
    if( !update ) {

      if( this.Control.controls.totalAmount.controls.percentage === undefined && this.PreviousTotalAmount.percentage !== undefined) {
      
        this.Control.controls.totalAmount.addControl( 'percentage', new FormControl< number | null >( null) );     
        
      }
      
      this.Control.controls.totalAmount.setValue( this.PreviousTotalAmount );
    
    }

    this.ControlToggle = false;
  

  }
  
  
  
  toggleSaturatedFatOn() : void {
  
    this.PreviousSaturatedFatAmount = this.Control.value.saturatedFat as ElementWeightType;
    this.SaturatedFatToggle = true;
  
  }
  
  toggleSaturatedFatOff( update : boolean ) : void {
  
    if( !update ) {

      if( this.Control.controls.saturatedFat!.controls.percentage === undefined && this.PreviousSaturatedFatAmount.percentage !== undefined) {
      
        this.Control.controls.saturatedFat!.addControl( 'percentage', new FormControl< number | null >( null) );     
        
      }

      if( this.Control.controls.saturatedFat!.controls.percentage !== undefined && this.PreviousSaturatedFatAmount.percentage === undefined ){

        this.Control.controls.saturatedFat!.removeControl( 'percentage' );
        
      }
      
      this.Control.controls.saturatedFat!.setValue( this.PreviousSaturatedFatAmount );

    }
  
    this.SaturatedFatToggle = false;

  }
  
  
  
  toggleTransFatOn() : void {
  
    this.PreviousTransFatAmount = this.Control.value.transFat as ElementWeightType;
    this.TransFatToggle = true;
  
  }
  
  toggleTransFatOff( update : boolean ) : void {
  
    if( !update ) {

      if( this.Control.controls.transFat!.controls.percentage === undefined && this.PreviousTransFatAmount.percentage !== undefined) {
      
        this.Control.controls.transFat!.addControl( 'percentage', new FormControl< number | null >( null) );     
        
      }

      if( this.Control.controls.transFat!.controls.percentage !== undefined && this.PreviousTransFatAmount.percentage === undefined ){

        this.Control.controls.transFat!.removeControl( 'percentage' );
        
      }


      this.Control.controls.transFat!.setValue( this.PreviousTransFatAmount );

    }
  
    this.TransFatToggle = false;

  }
  
  
  
  toggleMonounsaturatedFatOn() : void {
  
    this.PreviousMonounsaturatedFatAmount = this.Control.value.monounsaturatedFat as ElementWeightType;
    this.MonounsaturatedFatToggle = true;
  
  }
  
  toggleMonounsaturatedFatOff( update : boolean ) : void {
  
    if( !update ) {

      if( this.Control.controls.monounsaturatedFat!.controls.percentage === undefined && this.PreviousMonounsaturatedFatAmount.percentage !== undefined) {
      
        this.Control.controls.monounsaturatedFat!.addControl( 'percentage', new FormControl< number | null >( null) );     
        
      }

      if( this.Control.controls.monounsaturatedFat!.controls.percentage !== undefined && this.PreviousMonounsaturatedFatAmount.percentage === undefined ){

        this.Control.controls.monounsaturatedFat!.removeControl( 'percentage' );
        
      }


      this.Control.controls.monounsaturatedFat!.setValue( this.PreviousMonounsaturatedFatAmount );

    }
  
    this.MonounsaturatedFatToggle = false;

  }
  
  
  
  togglePolyunsaturatedFatOn() : void {
  
    this.PreviousPolyunsaturatedFatAmount = this.Control.value.polyunsaturatedFat as ElementWeightType;
    this.PolyunsaturatedFatToggle = true;
  
  }
  
  togglePolyunsaturatedFatOff( update : boolean ) : void {
  
    if( !update ) {

      if( this.Control.controls.polyunsaturatedFat!.controls.percentage === undefined && this.PreviousPolyunsaturatedFatAmount.percentage !== undefined) {
      
        this.Control.controls.polyunsaturatedFat!.addControl( 'percentage', new FormControl< number | null >( null) );     
        
      }

      if( this.Control.controls.polyunsaturatedFat!.controls.percentage !== undefined && this.PreviousPolyunsaturatedFatAmount.percentage === undefined ){

        this.Control.controls.polyunsaturatedFat!.removeControl( 'percentage' );
        
      }
      
      this.Control.controls.polyunsaturatedFat!.setValue( this.PreviousPolyunsaturatedFatAmount );

    }
  
    this.PolyunsaturatedFatToggle = false;

  }



  addFatType( type : 'saturated' | 'trans' | 'mono' | 'poly' ) : void {

    const group : FormGroup< ElementWeightGroupType > = createElementWeightGroup( { amount : 0, weightType : 'g'} );

    switch( type ){

      case 'saturated' : this.Control.addControl( 'saturatedFat',       group ); break;
      case 'trans'     : this.Control.addControl( 'transFat',           group ); break;
      case 'mono'      : this.Control.addControl( 'monounsaturatedFat', group ); break;
      case 'poly'      : this.Control.addControl( 'polyunsaturatedFat', group ); break;

      default          : throw new Error( `${ type } is not an acceptable fat type` );

    }
  }
  

}
