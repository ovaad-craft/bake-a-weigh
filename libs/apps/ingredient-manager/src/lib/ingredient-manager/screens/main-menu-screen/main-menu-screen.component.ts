/*

Main Menu Screen


PURPOSE :
 > To serve as the UI that allows the user to interact with and manager their ingredients.
 > To serve as the component that loads when the "main-menu" route is triggered.


ELEMENTS :
 > Modal Component


VIEWS :
 > Main Menu Component
 > Ingredient Editor Component


INTERACTIVITY :
 > Toggles Modal on and off to display Ingredient Editor Component


FUNCTIONALITY : none


SENDS DATA TO : nowhere


GETS DATA FROM :
 > @Output on Main Menu Component to toggle modal on.
 > @Output on Modal Component to toggle itself off.


ROUTES TO : nowhere


USER STORY :
 > User should see the Main Menu Component when this screen loads.
 > User should see modal when ModalToggle variable is set to "true".
 > User shouldn't see modal when ModalToggle variable is set to "false".



*/







import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-main-menu-screen',
  imports: [CommonModule],
  templateUrl: './main-menu-screen.component.html',
  styleUrl: './main-menu-screen.component.css',
})
export class MainMenuScreenComponent {}
