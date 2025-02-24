/*

Main Menu Component


PURPOSE :
 > Displays a list of all user's ingredients.


ELEMENTS :


VIEWS :
 > Category Component


ROUTES TO :
 > Ingredient Generator


INTERACTIVITY :


FUNCTIONALITY: none


USER STORY:
 > User should see all their defined ingredients.

*/





import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientEditorComponent } from '../ingredient-editor/ingredient-editor.component';

@Component({
  selector: 'lib-im-main-menu',
  imports: [CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
})
export class MainMenuComponent {}
