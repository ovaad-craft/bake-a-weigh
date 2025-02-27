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
import { CategoryIndex, CategoryResponse } from '@bake-a-weigh/site-types';
import { CategoryComponent } from '@bake-a-weigh/bw-elements';
import { IngredientManagerService } from '../../ingredient-manager.service';

@Component({
  selector: 'lib-im-main-menu',
  imports: [CommonModule, CategoryComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
})
export class MainMenuComponent {

  DemoData: CategoryIndex[] = DemoCategory;



  constructor( private ingredientService: IngredientManagerService ) {}


  
  
  
  handleCategoryResponse( response : CategoryResponse ) : void {

    switch( response.responseType ) {
      case 'new':
        this.handleNewIngredientResponse( response );
        break;
      case 'item':
        this.handleSelectedIngredient( response );
        break;
      case 'category':
        this.handleSelectedCategory( response );
        break
    }

  }



  handleNewIngredientResponse(path : CategoryResponse){
    console.log(path);
  }



  handleSelectedIngredient(ingredient : CategoryResponse) : void {
    console.log(ingredient);
  }



  handleSelectedCategory(path : CategoryResponse){
    console.log(path);
  }
}
