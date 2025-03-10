/*

NutritionGroup

PURPOSE :

VIEWS :

ELEMENTS :

INTERACTIVITY :

GETS DATA FROM :

SENDS DATA TO :

USER STORIES :

*/





import { Component, Input, OnInit }    from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NutritionGroup } from '../../views/ingredient-editor/form-generator/form-types';
import { NumberInputComponent } from '@form-controls';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { ServingSizeComponent } from "./serving-size/serving-size.component";
import { VitaminsAndMineralsListComponent } from './vitamins-and-minerals-list/vitamins-and-minerals-list.component';
import { NutrientCategoryComponent } from './nutrient-category/nutrient-category.component';





@Component({
    selector    : 'lib-nutrition-group',
    imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NumberInputComponent,
    NutrientCategoryComponent,
    IngredientListComponent,
    ServingSizeComponent,
    VitaminsAndMineralsListComponent
],
    templateUrl : './nutrition-group.component.html',
    styleUrls   : [ './nutrition-group.component.css' ]
})

export class NutritionGroupComponent implements OnInit {

    @Input() Control! : FormGroup< NutritionGroup >;

    TotalFatToggle = false;



    ngOnInit(): void {
        
        if(this.Control.controls.totalFat){ this.TotalFatToggle = true; }
    }
}