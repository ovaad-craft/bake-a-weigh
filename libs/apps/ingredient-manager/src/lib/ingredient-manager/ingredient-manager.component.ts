import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './screens/main-menu/main-menu.component';

@Component({
  selector: 'lib-ingredient-manager',
  imports: [CommonModule, MainMenuComponent],
  templateUrl: './ingredient-manager.component.html',
  styleUrl: './ingredient-manager.component.css',
})
export class IngredientManagerComponent {}
