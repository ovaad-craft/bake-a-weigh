/*

Cholesterol

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
import { ElementWeightGroupType } from '../../../views/ingredient-editor/form-generator/form-types';
import { WeightComponent } from '../weight/weight.component';
import { NumberInputComponent } from '@form-controls';
import { ElementWeightType } from '@bake-a-weigh/site-types';

@Component({
  selector: 'lib-cholesterol',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WeightComponent,
    NumberInputComponent
    
  ],
  templateUrl: './cholesterol.component.html',
  styleUrls: ['./cholesterol.component.css'],
})
export class CholesterolComponent {

  @Input() Control! : FormGroup< ElementWeightGroupType >;
  @Input() Label!   : string;



  PreviousAmount! : ElementWeightType;
  ControlToggle = false;



  toggleControlOn() : void {

    this.PreviousAmount = this.Control.value as ElementWeightType;
    this.ControlToggle = true;

  }



  toggleControlOff( update : boolean ) : void {

    if( !update ) { this.Control.setValue( this.PreviousAmount ); }

    this.ControlToggle = false;

  }


}
