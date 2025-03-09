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

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormArrayGroupList, NutrientGroupType } from '../../../views/ingredient-editor/form-generator/form-types';
import { createNutrientGroup } from '../../../views/ingredient-editor/form-generator/primatives/multi-value/nutrition/nutrient-group/nutrient-group';

@Component({
  selector: 'lib-vitamins-and-minerals-list',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './vitamins-and-minerals-list.component.html',
  styleUrls: ['./vitamins-and-minerals-list.component.css'],
})
export class VitaminsAndMineralsListComponent {

  @Input() Control! : FormGroup< FormArrayGroupList< NutrientGroupType > >;



  addItem() : void {

    this.Control.controls.list.controls.push( createNutrientGroup() );

  }



  removeItem(index : number) : void {

    this.Control.controls.list.removeAt( index );

  }

  

}
