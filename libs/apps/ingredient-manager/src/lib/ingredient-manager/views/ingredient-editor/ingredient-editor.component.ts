/*

Ingredient Editor

Purpose:
> Allows user to edit the details of an ingredient's profile.


Elements:


Views:
> Nutrition Profile Generator.


Routes To: Nowhere


Interactivity:


Functionality:


User Story:

 */







import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientManagerService } from '../../ingredient-manager.service';
import { IngredientProfile } from '@bake-a-weigh/site-types';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IngredientForm } from './form-generator/form-types';
import { createIngredientForm } from './form-generator/ingredient-form';
import { TextInputComponent } from '@form-controls';







@Component({
  selector: 'lib-im-ingredient-editor',
  imports: [CommonModule, ReactiveFormsModule, TextInputComponent ],
  templateUrl: './ingredient-editor.component.html',
  styleUrl: './ingredient-editor.component.css',
})
export class IngredientEditorComponent implements OnInit{

  Ingredient! : IngredientProfile;

  IngredientEditorForm! : FormGroup< IngredientForm >;

  constructor( private ingredientService : IngredientManagerService ){}

  ngOnInit(): void {
      this.Ingredient           = this.ingredientService.getIngredientToEdit();
      this.IngredientEditorForm = createIngredientForm( this.ingredientService.getIngredientToEdit() );
      
      console.log(this.IngredientEditorForm);
  }

}
