/*

Ingredient Manager Component

Purpose:
> Organizes ingredients into structure of categories defined by user.
> Allows user to create new ingredient profiles.
> Allows user to edit existing ingredient profiles.

Views:
> Main Menu
> Ingredient Generator
> Ingredient Editor

Functionality:
> Uses router to switch between different views.
> Loads main menu route by default.

*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './screens/main-menu/main-menu.component';
import { IngredientEditorComponent } from './screens/ingredient-editor/ingredient-editor.component';
import { IngredientViewerComponent } from './screens/ingredient-viewer/ingredient-viewer.component';
import { IngredientGeneratorComponent } from './screens/ingredient-generator/ingredient-generator.component';
import { NutritionProfileGeneratorComponent } from './screens/nutrition-profile-generator/nutrition-profile-generator.component';

@Component({
  selector: 'lib-ingredient-manager',
  imports: [
    CommonModule,
    MainMenuComponent,
    IngredientEditorComponent,
    IngredientViewerComponent,
    IngredientGeneratorComponent,
    NutritionProfileGeneratorComponent

  ],
  templateUrl: './ingredient-manager.component.html',
  styleUrl: './ingredient-manager.component.css',
})
export class IngredientManagerComponent {}
