/*

TotalCarbohydratesGroup

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
import { ElementWeightGroupType, TotalCarbohydratesGroup, TotalSugarsGroup } from '../../../views/ingredient-editor/form-generator/form-types';
import { ElementWeightType } from '@bake-a-weigh/site-types';
import { WeightComponent } from '../weight/weight.component';
import { createElementWeightGroup } from '../../../views/ingredient-editor/form-generator/primatives/multi-value/element-weight-group/element-weight-group';
import { createTotalSugarsGroup } from '../../../views/ingredient-editor/form-generator/primatives/multi-value/nutrition/total-carbohydrates-group/total-sugars-group/total-sugars-group';
import { TotalSugarsComponent } from './total-sugars/total-sugars.component';

@Component({
  selector: 'lib-total-carbohydrates-group',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WeightComponent,
    TotalSugarsComponent
  ],
  templateUrl: './total-carbohydrates-group.component.html',
  styleUrls: ['./total-carbohydrates-group.component.css'],
})
export class TotalCarbohydratesGroupComponent implements OnInit {

  @Input() Control! : FormGroup< TotalCarbohydratesGroup >;
  @Input() Label!   : string;
  @Input() NewEntry = false;



  ControlToggle = false;
  PreviousTotalAmount! : ElementWeightType;
  
  DietaryFiberToggle = false;
  PreviousDietaryFiberAmount!  : ElementWeightType;
  
  SolubleFiberToggle = false;
  PreviousSolubleFiberAmount!  : ElementWeightType;
  
  TotalSugarsToggle = false;
  PreviousTotalSugarsAmount!   : ElementWeightType;
  NewTotalSugarsEntry = false;
  
  SugarAlcoholsToggle = false;
  PreviousSugarAlcoholsAmount! : ElementWeightType;
  
  
  
  ngOnInit(): void {
      
    if( this.NewEntry ){ this.ControlToggle = true; }

  }



  addCarbohydrateType( type : 'dietary' | 'soluble' | 'totalSugars' | 'alcohol' ) : void {

    if( type !== 'totalSugars' ) {
      
      const group : FormGroup< ElementWeightGroupType > = createElementWeightGroup( { amount : 0, weightType : 'g'} );

      if( type === 'dietary')  {
        
        this.Control.addControl( 'dietaryFiber', group );
        this.DietaryFiberToggle = true;

      }

      if( type === 'soluble' ) {
        
        this.Control.addControl( 'solubleFiber', group );
        this.SolubleFiberToggle = true;

      }

      if( type === 'alcohol' ) {

        this.Control.addControl( 'sugarAlcohols', group );
        this.SugarAlcoholsToggle = true;
      }
      
    }

    else {

      const group : FormGroup< TotalSugarsGroup > = createTotalSugarsGroup({

        totalAmount : { amount : 0, weightType : 'g' }

      });

      this.Control.addControl( 'totalSugars', group );
      this.NewTotalSugarsEntry = true;
      this.TotalSugarsToggle   = true;

    }
  
  }



  toggleControlOn() : void {
    
    this.PreviousTotalAmount = this.Control.value.totalAmount as ElementWeightType;
    this.ControlToggle = true;
    
  }
    
  toggleControlOff( update : boolean ) : void {
   
    if( !update && this.PreviousTotalAmount ) {
  
      if( this.Control.controls.totalAmount.controls.percentage === undefined && this.PreviousTotalAmount.percentage !== undefined) {
        
        this.Control.controls.totalAmount.addControl( 'percentage', new FormControl< number | null >( null) );     
          
      }
        
      this.Control.controls.totalAmount.setValue( this.PreviousTotalAmount );
      
    }
  
      this.ControlToggle = false;
    
  
  }
    
    
    
  toggleDietaryFiberOn() : void {
    
    this.PreviousDietaryFiberAmount = this.Control.value.dietaryFiber as ElementWeightType;
    this.DietaryFiberToggle = true;
    
  }
    
  toggleDietaryFiberOff( update : boolean ) : void {
    
    if( !update && this.PreviousDietaryFiberAmount !== undefined ) {
  
  
  
      if( this.Control.controls.dietaryFiber!.controls.percentage === undefined && this.PreviousDietaryFiberAmount.percentage !== undefined) {
        
        this.Control.controls.dietaryFiber!.addControl( 'percentage', new FormControl< number | null >( null) );     
          
      }
  
      if( this.Control.controls.dietaryFiber!.controls.percentage !== undefined && this.PreviousDietaryFiberAmount.percentage === undefined ){
  
        this.Control.controls.dietaryFiber!.removeControl( 'percentage' );
          
      }
        
      this.Control.controls.dietaryFiber!.setValue( this.PreviousDietaryFiberAmount );
  
    }
    
    this.DietaryFiberToggle = false;
  
  }
    
    
    
    toggleSolubleFiberOn() : void {
    
      this.PreviousSolubleFiberAmount = this.Control.value.solubleFiber as ElementWeightType;
      this.SolubleFiberToggle = true;
    
    }
    
    toggleSolubleFiberOff( update : boolean  ) : void {
    
      if( !update && this.PreviousSolubleFiberAmount !== undefined ) {
  
        if( this.Control.controls.solubleFiber!.controls.percentage === undefined && this.PreviousSolubleFiberAmount.percentage !== undefined) {
        
          this.Control.controls.solubleFiber!.addControl( 'percentage', new FormControl< number | null >( null) );     
          
        }
  
        if( this.Control.controls.solubleFiber!.controls.percentage !== undefined && this.PreviousSolubleFiberAmount.percentage === undefined ){
  
          this.Control.controls.solubleFiber!.removeControl( 'percentage' );
          
        }
  
  
        this.Control.controls.solubleFiber!.setValue( this.PreviousSolubleFiberAmount );
  
      }
    
      this.SolubleFiberToggle = false;
  
    }
    
    
    
    toggleTotalSugarsOn() : void {
    
      this.PreviousTotalSugarsAmount = this.Control.value.totalAmount as ElementWeightType;
      this.TotalSugarsToggle = true;
    
    }
    
    toggleTotalSugarsOff( update : boolean ) : void {
    
      if( !update && this.PreviousTotalSugarsAmount !== undefined ) {
  
        if( this.Control.controls.totalAmount!.controls.percentage === undefined && this.PreviousTotalSugarsAmount.percentage !== undefined) {
        
          this.Control.controls.totalAmount!.addControl( 'percentage', new FormControl< number | null >( null) );     
          
        }
  
        if( this.Control.controls.totalAmount!.controls.percentage !== undefined && this.PreviousTotalSugarsAmount.percentage === undefined ){
  
          this.Control.controls.totalAmount!.removeControl( 'percentage' );
          
        }
  
  
        this.Control.controls.totalAmount!.setValue( this.PreviousTotalSugarsAmount );
  
      }
    
      this.TotalSugarsToggle = false;
  
    }
    
    
    
    toggleSugarAlcoholsOn() : void {
    
      this.PreviousSugarAlcoholsAmount = this.Control.value.totalAmount as ElementWeightType;
      this.SugarAlcoholsToggle = true;
    
    }
    
    toggleSugarAlcoholsOff( update : boolean ) : void {
    
      if( !update && this.PreviousSugarAlcoholsAmount !== undefined ) {
  
        if( this.Control.controls.sugarAlcohols!.controls.percentage === undefined && this.PreviousSugarAlcoholsAmount.percentage !== undefined) {
        
          this.Control.controls.sugarAlcohols!.addControl( 'percentage', new FormControl< number | null >( null) );     
          
        }
  
        if( this.Control.controls.sugarAlcohols!.controls.percentage !== undefined && this.PreviousSugarAlcoholsAmount.percentage === undefined ){
  
          this.Control.controls.sugarAlcohols!.removeControl( 'percentage' );
          
        }
  
  
        this.Control.controls.sugarAlcohols!.setValue( this.PreviousSugarAlcoholsAmount );
  
      }
    
      this.SugarAlcoholsToggle = false;
  
    }


}
