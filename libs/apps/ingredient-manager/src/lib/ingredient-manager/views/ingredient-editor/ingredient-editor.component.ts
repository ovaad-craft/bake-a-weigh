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
import { IngredientProfileManagerComponent } from '../../components/ingredient-profile-manager/ingredient-profile-manager.component';
import { LocationListComponent } from '../../components/location-list/location-list.component';







@Component({
  selector: 'lib-im-ingredient-editor',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    NutritionGroupComponent,
    NoteListComponent,
    IngredientProfileManagerComponent,
    LocationListComponent
],
  templateUrl: './ingredient-editor.component.html',
  styleUrl: './ingredient-editor.component.css',
})
export class IngredientEditorComponent implements OnInit{

  Ingredient! : IngredientProfile;

  IngredientEditorForm! : FormGroup< IngredientForm >;

  NotesToggle       = false;
  ProfileTypeToggle = false;

  EditNameToggle = false;
  NamePreviousValue = '';
  EditBrandToggle = false;
  BrandPreviousValue = ''

  constructor( private ingredientService : IngredientManagerService ){}

  ngOnInit(): void {

      this.Ingredient           = this.ingredientService.getIngredientToEdit();
      this.IngredientEditorForm = createIngredientForm( this.ingredientService.getIngredientToEdit() );



      if( this.IngredientEditorForm.controls.notes )       { this.NotesToggle       = true; }
      if( this.IngredientEditorForm.controls.profileType ) { this.ProfileTypeToggle = true; }
      
  }





  openNameControl() : void {

    this.NamePreviousValue = this.IngredientEditorForm.value.name!;
    this.EditNameToggle = true;

  }

  closeNameControl( updateData : boolean ) : void {

    if ( !updateData ) {

      this.IngredientEditorForm.controls.name.setValue( this.NamePreviousValue );

    }    
    
    
    this.EditNameToggle = false;
    this.NamePreviousValue = '';
    
  }
  
  
  
  openBrandControl() : void {

    this.BrandPreviousValue = this.IngredientEditorForm.value.brand!;
    this.EditBrandToggle = true;

  }

  closeBrandControl( update : boolean ) : void {

    if ( !update ) {

      this.IngredientEditorForm.controls.brand.setValue( this.BrandPreviousValue );

    }

    

    this.BrandPreviousValue = '';
    this.EditBrandToggle = false;


  }
  


  handleSubmission() : void {
    //event.preventDefault();
    this.ingredientService.updateIngredient( this.IngredientEditorForm.value );
  }

}
