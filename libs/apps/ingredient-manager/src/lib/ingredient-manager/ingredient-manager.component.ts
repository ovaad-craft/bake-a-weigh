/*

Ingredient Manager


PURPOSE :
 > Allows user to create, edit, remove and organize their ingredient profiles 


ELEMENTS :
 > Router Outlet
     Routes :
     > Main Menu Screen
     > Ingredient Generator Screen


VIEWS : none


INTERACTIVITY : none


FUNCTIONALITY :
 > Load routes as user navigates.
 > Loads main menu route by default.


SENDS DATA TO : nowhere


GETS DATA FROM : nowhere


ROUTES TO : nowhere


USER STORY :
 > User should see the main menu by default when the component loads.
 > User should be able to navigate to each route.



*/

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IngredientManagerService } from './ingredient-manager.service';

@Component({
  selector: 'lib-ingredient-manager',
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './ingredient-manager.component.html',
  styleUrl: './ingredient-manager.component.css',
})
export class IngredientManagerComponent {

  private ingredientService = inject(IngredientManagerService);
}
