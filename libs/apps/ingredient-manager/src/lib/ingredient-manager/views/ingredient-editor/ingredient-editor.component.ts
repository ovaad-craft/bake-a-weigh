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

@Component({
  selector: 'lib-im-ingredient-editor',
  imports: [CommonModule],
  templateUrl: './ingredient-editor.component.html',
  styleUrl: './ingredient-editor.component.css',
})
export class IngredientEditorComponent implements OnInit{

  Ingredient! : IngredientProfile;

  constructor( private ingredientService : IngredientManagerService ){}

  ngOnInit(): void {
      this.Ingredient = this.ingredientService.getIngredientToEdit();
  }

}
