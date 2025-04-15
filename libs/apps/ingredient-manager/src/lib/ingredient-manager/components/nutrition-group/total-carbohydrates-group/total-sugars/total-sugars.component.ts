/*

TotalSugars

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

import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { TotalSugarsGroup } from '../../../../views/ingredient-editor/form-generator/form-types';
import { WeightComponent } from '../../weight/weight.component';
import { ElementWeightType } from '@bake-a-weigh/site-types';
import { createElementWeightGroup } from '../../../../views/ingredient-editor/form-generator/primatives/multi-value/element-weight-group/element-weight-group';

@Component({
  selector: 'lib-total-sugars',
  imports: [CommonModule, ReactiveFormsModule, WeightComponent],
  templateUrl: './total-sugars.component.html',
  styleUrls: ['./total-sugars.component.css'],
})
export class TotalSugarsComponent implements OnInit {


  @Input() Control! : FormGroup< TotalSugarsGroup >;
  @Input() Label!   : string;
  @Input() NewEntry = false;

  ControlToggle        = false;
  PreviousTotalAmount! : ElementWeightType;

  AddedSugarsToggle          = false;
  PreviousAddedSugarsAmount! : ElementWeightType;



  ngOnInit(): void {

    if( this.NewEntry ) { this.ControlToggle = true; }
    console.log( this.Control);

  }



  addAddedSugars() : void {

    this.Control.addControl( 'addedSugars', createElementWeightGroup({
      
      amount : 0,
      weightType : 'g'

    }));

    this.AddedSugarsToggle = true;

  }



  toggleControlOn() : void {
    
      this.PreviousTotalAmount = this.Control.value.totalAmount as ElementWeightType;
      this.ControlToggle = true;
    
    }
    
    toggleControlOff( update : boolean ) : void {
    
      if( !update && this.PreviousTotalAmount !== undefined ) {
  
        if( this.Control.controls.totalAmount.controls.percentage === undefined && this.PreviousTotalAmount.percentage !== undefined) {
        
          this.Control.controls.totalAmount.addControl( 'percentage', new FormControl< number | null >( null) );     
          
        }
        
        this.Control.controls.totalAmount.setValue( this.PreviousTotalAmount );
      
      }
  
      this.ControlToggle = false;
    
  
    }
    
    
    
    toggleAddedSugarsOn() : void {
    
      this.PreviousAddedSugarsAmount = this.Control.value.addedSugars as ElementWeightType;
      this.AddedSugarsToggle = true;
    
    }
    
    toggleAddedSugarsOff( update : boolean ) : void {
    
      if( !update && this.PreviousAddedSugarsAmount !== undefined ) {
  
  
  
        if( this.Control.controls.addedSugars!.controls.percentage === undefined && this.PreviousAddedSugarsAmount.percentage !== undefined) {
        
          this.Control.controls.addedSugars!.addControl( 'percentage', new FormControl< number | null >( null) );     
          
        }
  
        if( this.Control.controls.addedSugars!.controls.percentage !== undefined && this.PreviousAddedSugarsAmount.percentage === undefined ){
  
          this.Control.controls.addedSugars!.removeControl( 'percentage' );
          
        }
        
        this.Control.controls.addedSugars!.setValue( this.PreviousAddedSugarsAmount );
  
      }
    
      this.AddedSugarsToggle = false;
  
    }




}
