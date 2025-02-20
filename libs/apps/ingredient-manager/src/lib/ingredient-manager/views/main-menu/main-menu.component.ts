/*

Main Menu Component


Purpose:
> Displays a list of all user's ingredients.
> Direct user to ingredient generator if they want to create a new ingredient.
> Allow user to edit an ingredient's details.


Elements:
> Modal Component


Views:
> Ingredient Editor
> Category Manager


Routes To:
> Ingredient Generator


Interactivity:
> Toggles Modal on when user clicks on an ingredient.
> Toggles Modal off when user completes or cancels an edit.


Functionality: none


User Story:
> User should see a scrollable list of all their ingredients.

*/





import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientEditorComponent } from '../ingredient-editor/ingredient-editor.component';

@Component({
  selector: 'lib-im-main-menu',
  imports: [CommonModule, IngredientEditorComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
})
export class MainMenuComponent {}
