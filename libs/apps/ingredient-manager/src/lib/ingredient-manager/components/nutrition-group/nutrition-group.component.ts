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
import { NutritionOptionType, WeightMeasurement } from '@bake-a-weigh/site-types';
import { createNutrientCategoryGroup } from '../../views/ingredient-editor/form-generator/primatives/multi-value/nutrition/nutrient-category-group/nutrient-category-group';
import { createVitaminsAndMineralsArray } from '../../views/ingredient-editor/form-generator/primatives/multi-value/nutrition/vitamins-minerals-list/vitamins-minerals-list';
import { TotalFatComponent } from './total-fat/total-fat.component';
import { CholesterolComponent } from './cholesterol/cholesterol.component';
import { createElementWeightGroup } from '../../views/ingredient-editor/form-generator/primatives/multi-value/element-weight-group/element-weight-group';





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
    TotalFatComponent,
    CholesterolComponent,
    VitaminsAndMineralsListComponent
],
    templateUrl : './nutrition-group.component.html',
    styleUrls   : [ './nutrition-group.component.css' ]
})

export class NutritionGroupComponent implements OnInit {

    @Input() Control! : FormGroup< NutritionGroup >;

    SodiumToggle      = false;
    ProteinToggle     = false;
    TotalFatToggle    = false;
    CholesterolToggle = false;
    TotalCarbohydratesToggle  = false;
    VitaminsAndMineralsToggle = false

    ServingAndCalorieControlToggle = false;

    ServingSizePreviousValue! : WeightMeasurement;
    CaloriesPreviousValue!    : number;



    ngOnInit(): void {
        
        if( this.Control.controls.sodium              ) { this.SodiumToggle              = true; }
        if( this.Control.controls.protein             ) { this.ProteinToggle             = true; }
        if( this.Control.controls.totalFat            ) { this.TotalFatToggle            = true; }
        if( this.Control.controls.cholesterol         ) { this.CholesterolToggle         = true; }
        if( this.Control.controls.totalCarbohydrates  ) { this.TotalCarbohydratesToggle  = true; }
        if( this.Control.controls.vitaminsAndMinerals ) { this.VitaminsAndMineralsToggle = true; }

    }



    openServingAndCalorieControl() : void {
        
        this.ServingSizePreviousValue = this.Control.value.servingSize as WeightMeasurement;
        this.CaloriesPreviousValue    = this.Control.value.calories as number;
        this.ServingAndCalorieControlToggle = true;

    }



    closeServingAndCalorieControl( update : boolean ) : void {

        if( !update ){

            this.Control.controls.servingSize.setValue( this.ServingSizePreviousValue );
            this.Control.controls.calories.setValue( this.CaloriesPreviousValue );

        }

        this.ServingAndCalorieControlToggle = false;

    }



    addGroup( group : NutritionOptionType ) : void {

        
        if( !this.Control.controls[ group ] ) {
            
            
            this.Control.addControl( `${ group }`, createNutrientCategoryGroup({

                totalAmount : {
                    amount : 0,
                    weightType : 'g'
                }

            }));

        }

        switch ( group ) {
            
            case 'totalFat'    : this.TotalFatToggle    = true; break;
            case 'cholesterol' : this.CholesterolToggle = true; break;
            case 'sodium'      : this.SodiumToggle      = true; break;
            case 'protein'     : this.ProteinToggle     = true; break;
            case 'totalCarbohydrates' : this.TotalCarbohydratesToggle = true; break;
            
            default : throw new Error( `${group} is not a nutrition item.` );

        }

    }



    removeGroup( group : NutritionOptionType ) : void {

        if( this.Control.controls[ group ] ) {

            this.Control.removeControl( `${ group }` );

        }

        switch ( group ) {
            
            case 'totalFat'    : this.TotalFatToggle    = false; break;
            case 'cholesterol' : this.CholesterolToggle = false; break;
            case 'sodium'      : this.SodiumToggle      = false; break;
            case 'protein'     : this.ProteinToggle     = false; break;
            case 'totalCarbohydrates' : this.TotalCarbohydratesToggle = false; break;

            default : throw new Error( `${group} is not a nutrition item.` );

        }

    }



    addTotalFat() : void {

        this.Control.addControl( 'totalFat', createNutrientCategoryGroup({

            totalAmount : {
                amount : 0,
                weightType : 'g'
            }

        }));
        
        this.TotalFatToggle = true;
        
    }
    
    
    
    removeTotalFat() : void {

        this.TotalFatToggle = false;
        this.Control.removeControl( 'totalFat' );        

    }



    addCholesterol() : void {

        this.Control.addControl( 'cholesterol', createElementWeightGroup({

            amount : 0,
            weightType : 'g'

        }));

        this.CholesterolToggle = true;

    }

    removeCholesterol() : void {

        this.CholesterolToggle = false;
        this.Control.removeControl( 'cholesterol' );

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