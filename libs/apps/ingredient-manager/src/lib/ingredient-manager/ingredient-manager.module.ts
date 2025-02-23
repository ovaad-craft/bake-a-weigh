import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientManagerComponent } from './ingredient-manager.component';
import { IngredientManagerRoutingModule } from './ingredient-manager-routing.module';
import { MainMenuScreenComponent } from './screens/main-menu-screen/main-menu-screen.component';
import { IngredientGeneratorScreenComponent } from './screens/ingredient-generator-screen/ingredient-generator-screen.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IngredientManagerComponent,
    MainMenuScreenComponent,
    IngredientGeneratorScreenComponent,
    IngredientManagerRoutingModule
  ],
  exports: [
    IngredientManagerComponent,
    MainMenuScreenComponent,
    IngredientGeneratorScreenComponent,
    IngredientManagerRoutingModule
  ]
})
export class IngredientManagerModule { }
