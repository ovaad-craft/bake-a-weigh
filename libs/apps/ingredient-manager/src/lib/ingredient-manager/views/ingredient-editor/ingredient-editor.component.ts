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
import { NutritionGroupComponent } from '../../components/nutrition-group/nutrition-group.component';
import { NoteListComponent } from "../../components/note-list/note-list.component";







@Component({
  selector: 'lib-im-ingredient-editor',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    NutritionGroupComponent,
    NoteListComponent
],
  templateUrl: './ingredient-editor.component.html',
  styleUrl: './ingredient-editor.component.css',
})
export class IngredientEditorComponent implements OnInit{

  Ingredient! : IngredientProfile;

  IngredientEditorForm! : FormGroup< IngredientForm >;

  NotesToggle = false;
  ProfileTypeToggle = false;

  constructor( private ingredientService : IngredientManagerService ){}

  ngOnInit(): void {

      this.Ingredient           = this.ingredientService.getIngredientToEdit();
      this.IngredientEditorForm = createIngredientForm( this.ingredientService.getIngredientToEdit() );
   
      console.log(this.IngredientEditorForm);

      if( this.IngredientEditorForm.controls.notes ) { this.NotesToggle = true; }
      if( this.IngredientEditorForm.controls.profileType ) { this.ProfileTypeToggle = true; }
      
  }

}
