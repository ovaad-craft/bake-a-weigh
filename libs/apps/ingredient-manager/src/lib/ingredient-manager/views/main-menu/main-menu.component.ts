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
import { CategoryComponentComponent } from '@bake-a-weigh/bw-elements';

@Component({
  selector: 'lib-im-main-menu',
  imports: [CommonModule, CategoryComponentComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
})
export class MainMenuComponent {}
