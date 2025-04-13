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
import { NutrientCategoryGroup } from '../../../views/ingredient-editor/form-generator/form-types';
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

  @Input() Control! : FormGroup< NutrientCategoryGroup >;
  @Input() Label!   : string;



  ControlToggle = false;

  PreviousTotalAmount! : ElementWeightType;



  toggleControlOn() : void {
  
      this.PreviousTotalAmount = this.Control.value.totalAmount as ElementWeightType;
      this.ControlToggle = true;
  
    }
  
    toggleControlOff( update : boolean ) : void {
  
      if( !update ) { this.Control.controls.totalAmount.setValue( this.PreviousTotalAmount ); }
  
      this.ControlToggle = false;
    }


}
