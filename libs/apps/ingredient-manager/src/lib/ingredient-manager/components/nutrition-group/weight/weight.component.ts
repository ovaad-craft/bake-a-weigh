/*

Weight

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
import { ElementWeightGroupType }   from '../../../views/ingredient-editor/form-generator/form-types';
import { WeightType }               from '@bake-a-weigh/site-types';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NumberInputComponent, SelectInputComponent }  from '@form-controls';

@Component({
  selector: 'lib-weight',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NumberInputComponent,
    SelectInputComponent

  ],
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css'],
})
export class WeightComponent implements OnInit {

  @Input()Control! : FormGroup< ElementWeightGroupType >;
  
    WeightOptions : WeightType[] = ['g','mcg','mg','ml'];

    PercentToggle = false;



    ngOnInit(): void {
        
      if( this.Control.controls.percentage ){ this.PercentToggle = true; }

    }



    addPercentage() : void {
    
        this.Control.addControl( 'percentage', new FormControl< number | null >( null ) );
    
        this.PercentToggle = true;
    
      }
    
    
    
      removePercentage() : void {
    
        this.Control.removeControl( 'percentage' );
    
        this.PercentToggle = false;
    
      }
}
