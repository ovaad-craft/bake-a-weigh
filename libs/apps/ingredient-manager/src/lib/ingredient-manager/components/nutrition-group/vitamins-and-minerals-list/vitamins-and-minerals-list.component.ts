/*

VitaminsAndMineralsList

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
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormArrayGroupList, NutrientGroupType } from '../../../views/ingredient-editor/form-generator/form-types';
import { createNutrientGroup } from '../../../views/ingredient-editor/form-generator/primatives/multi-value/nutrition/nutrient-group/nutrient-group';
import { ElementWeightComponent } from '../element-weight/element-weight.component';

@Component({
  selector: 'lib-vitamins-and-minerals-list',
  imports: [CommonModule, ReactiveFormsModule, ElementWeightComponent],
  templateUrl: './vitamins-and-minerals-list.component.html',
  styleUrls: ['./vitamins-and-minerals-list.component.css'],
})
export class VitaminsAndMineralsListComponent implements OnInit {

  @Input() Control! : FormGroup< FormArrayGroupList< NutrientGroupType > >;
  @Input() NewEntry = false;

  ControlToggle = false;



  ngOnInit(): void {
    
    if( this.Control.controls.list.length === 0 ) {
      this.addItem();
      this.ControlToggle = true;

    }
    //if( this.NewEntry ) { this.ControlToggle = true; }

  }



  openControl() : void { this.ControlToggle = true; }

  closeControl() : void { this.ControlToggle = false; }



  addItem() : void {

    this.Control.controls.list.controls.push( createNutrientGroup() );

  }



  removeItem(index : number) : void {

    this.Control.controls.list.removeAt( index );

  }



}
