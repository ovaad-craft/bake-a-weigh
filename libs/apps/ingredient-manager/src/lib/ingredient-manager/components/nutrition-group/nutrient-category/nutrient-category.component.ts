/*

NutrientCategory

PURPOSE :

VIEWS :

ELEMENTS :

INTERACTIVITY :

GETS DATA FROM :

SENDS DATA TO :

USER STORIES :

*/

import { Component, Input, OnInit }                    from '@angular/core';
import { CommonModule }                                from '@angular/common';
import { NutrientCategoryGroup }                       from '../../../views/ingredient-editor/form-generator/form-types';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent }                          from '@form-controls';
import { WeightComponent }                             from '../weight/weight.component';
import { createNutrientCategoryGroupArray }            from '../../../views/ingredient-editor/form-generator/primatives/multi-value/nutrition/nutrient-category-group-list/nutrient-category-group-list';
import { createNutrientCategoryGroup }                 from '../../../views/ingredient-editor/form-generator/primatives/multi-value/nutrition/nutrient-category-group/nutrient-category-group';





@Component({
  selector: 'lib-nutrient-category',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    WeightComponent
  ],
  templateUrl: './nutrient-category.component.html',
  styleUrls: ['./nutrient-category.component.css'],
})


export class NutrientCategoryComponent implements OnInit {

  @Input() Control! : FormGroup< NutrientCategoryGroup >;

  NameToggle      = false;
  NutrientsToggle = false;



  ngOnInit(): void {
      
    if( this.Control.controls.name      ) { this.NameToggle      = true; }
    if( this.Control.controls.nutrients ) { this.NutrientsToggle = true; }

  }



  addName() : void {

    this.Control.addControl( 'name', new FormControl< string | null >( null ) );
    this.NameToggle = true;

  }



  removeName() : void { this.Control.removeControl('name'); }



  addItem() : void {

    if( !this.Control.controls.nutrients ){

      this.Control.addControl( 'nutrients', createNutrientCategoryGroupArray() );

    }

    this.Control.controls.nutrients?.controls.list.push( createNutrientCategoryGroup() );

  }



  removeItem( index  : number) : void {

    this.Control.controls.nutrients?.controls.list.removeAt( index );

    if( this.Control.controls.nutrients?.controls.list.controls.length === 0 ) {

      this.NutrientsToggle = false;

    }

  }

}
