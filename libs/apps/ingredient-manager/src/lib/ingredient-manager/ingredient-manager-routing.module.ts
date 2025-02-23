import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuScreenComponent } from './screens/main-menu-screen/main-menu-screen.component';
import { IngredientGeneratorScreenComponent } from './screens/ingredient-generator-screen/ingredient-generator-screen.component';

export const INGREDIENTMANAGERROUTES: Routes = [
  {
    path: '',
    redirectTo: 'main-menu',
    pathMatch: 'full'
  },
  {
    path: 'main-menu',
    component: MainMenuScreenComponent
  },
  {
    path: 'ingredient-generator',
    component: IngredientGeneratorScreenComponent
  }
]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(INGREDIENTMANAGERROUTES)
  ],
  exports: [ RouterModule ]
})
export class IngredientManagerRoutingModule { }
