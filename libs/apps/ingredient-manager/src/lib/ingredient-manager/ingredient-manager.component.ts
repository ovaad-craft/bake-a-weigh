/*

Ingredient Manager Component


Purpose:
> Organizes ingredients into structure of categories defined by user.
> Allows user to create new ingredient profiles.
> Allows user to edit existing ingredient profiles.


Elements:
> Router Outlet


Views: none


Routes:
> Main Menu
> Ingredient Generator


Interactivity: none


Functionality:
> Load routes as user navigates.
> Loads main menu route by default.


User Story:
> User should see the main menu by default when the component loads.
> User should be able to navigate to each route.



*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ingredient-manager',
  imports: [
    CommonModule

  ],
  templateUrl: './ingredient-manager.component.html',
  styleUrl: './ingredient-manager.component.css',
})
export class IngredientManagerComponent {}
