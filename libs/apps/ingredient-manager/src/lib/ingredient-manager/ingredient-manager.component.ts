/*

Ingredient Manager


Purpose:
> Allows user to create, edit, remove and organize their ingredient profiles 


Elements:
> Router Outlet
    Routes:
    > Main Menu Screen
    > Ingredient Generator Screen


Views: none


Interactivity: none


Functionality:
> Load routes as user navigates.
> Loads main menu route by default.


Routes To: nowhere


User Story:
> User should see the main menu by default when the component loads.
> User should be able to navigate to each route.



*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-ingredient-manager',
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './ingredient-manager.component.html',
  styleUrl: './ingredient-manager.component.css',
})
export class IngredientManagerComponent {}
