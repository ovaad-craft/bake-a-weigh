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
import { NutritionOptionType } from '@bake-a-weigh/site-types';
import { createNutrientCategoryGroup } from '../../views/ingredient-editor/form-generator/primatives/multi-value/nutrition/nutrient-category-group/nutrient-category-group';
import { createVitaminsAndMineralsArray } from '../../views/ingredient-editor/form-generator/primatives/multi-value/nutrition/vitamins-minerals-list/vitamins-minerals-list';





@Component({
    selector : 'lib-nutrition-group',
    imports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NumberInputComponent,
    NutrientCategoryComponent,
    IngredientListComponent,
    ServingSizeComponent,
    VitaminsAndMineralsListComponent
],
    templateUrl : 'tester-parent.component.html',
    styleUrls   : [ 'tester-parent.component.css' ]
})

export class TesterParentComponent implements OnInit {

    @Input() Control! : FormGroup< NutritionGroup >;

    SodiumToggle      = false;
    ProteinToggle     = false;
    TotalFatToggle    = false;
    CholesterolToggle = false;
    TotalCarbohydratesToggle  = false;
    VitaminsAndMineralsToggle = false



    ngOnInit(): void {
        
        if( this.Control.controls.sodium              ) { this.SodiumToggle              = true; }
        if( this.Control.controls.protein             ) { this.ProteinToggle             = true; }
        if( this.Control.controls.totalFat            ) { this.TotalFatToggle            = true; }
        if( this.Control.controls.cholesterol         ) { this.CholesterolToggle         = true; }
        if( this.Control.controls.totalCarbohydrates  ) { this.TotalCarbohydratesToggle  = true; }
        if( this.Control.controls.vitaminsAndMinerals ) { this.VitaminsAndMineralsToggle = true; }

    }



    addGroup( group : NutritionOptionType ) : void {

        if( !this.Control.controls[ `${ group }` ] ) {

            this.Control.addControl( `${ group }`, createNutrientCategoryGroup() );

        }

    }



    removeGroup( group : NutritionOptionType ) : void {

        if( this.Control.controls[ `${ group }` ] ) {

            this.Control.removeControl( `${ group }` );

        }

    }



    addVitamins() : void {

        if( !this.Control.controls.vitaminsAndMinerals ) {

            this.Control.addControl( 'vitaminsAndMinerals', createVitaminsAndMineralsArray() );
        }

    }



    removeVitamins() : void {

        if( this.Control.controls.vitaminsAndMinerals ) {

            this.Control.removeControl( 'vitaminsAndMinerals' );

        }

    }



}