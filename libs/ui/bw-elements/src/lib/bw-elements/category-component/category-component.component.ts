/*

Category Component


PURPOSE :
 > Presents a group of items and or sub categories of items to the user. 


ELEMENTS :
 > Add Item Button
 > Edit Category Button
 > Category Item Component
 > SubCategory Button
 > Back Button


VIEWS : none


INTERACTIVITY :
 > Emits data about item up through an @Output when a Category Item is clicked.
 > Emits data about category through an @Output to parent when "add item" button is clicked.
 > Refreshes list of items when a subcategory button is clicked.
 > Has "next, prev" functionality for navigating sub categories of items.


FUNCTIONALITY :
 > Keep track of user's navigation through deep nested categories.
 > Update CurrentItem variable to display user's selections in template.


SENDS DATA TO :
 > Parent Component


GETS DATA FROM :
 > Parent Component


ROUTES TO : nowhere


USER STORY :
 > User should see name of current category at the top of the component.
 > User should see an edit button next to the name of the category.
 > If the current category has subcategories the subcategory container should be visible.
 > If the current category has subcategories the item container should be invisible.
 > User should see an "add" button as the first element in the item container.
 > If the current category doesn't have any subcategories the subcategory container should be invisible.
 > If the current category doesn't have any subcategories the item container should be visible.
 > If the User is at the top level of a category the "back" button should be invisible.
 > If the User is viewing a subcategory the "back" button should be visible.
 > When User clicks "edit" button data regarding the path to the current category should be emitted to parent component.
 > When User clicks on an item data regarding the path to the current item should be emitted to parent component.
 > When User clicks on a subcategory the CurrentItem should be updated with the selected category's data.
 > When User clicks "add" button the parent component must be notified.



*/







import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryIndex, CategoryResponse } from '@bake-a-weigh/site-types';
import { SubcategoryButtonComponent } from './components/subcategory-button/subcategory-button.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';



@Component({
  selector : 'lib-category-component',
  imports  : [
    CommonModule,
    AddButtonComponent,
    BackButtonComponent,
    SubcategoryButtonComponent,
    CategoryItemComponent,
    EditButtonComponent
  ],
  templateUrl : './category-component.component.html',
  styleUrl    : './category-component.component.css',
})
export class CategoryComponent implements OnInit {

  @Input() SingleItemName = 'item';
  @Input() GroupName      = 'category';
  @Input() CategoryData!  : CategoryIndex;
  @Input() GroupIndex!    : number;

  @Output() CategoryResponse : EventEmitter<CategoryResponse> = new EventEmitter<CategoryResponse>();

  CurrentItem! : CategoryIndex;
  PrevItems    : CategoryIndex[] = [];
  CategoryPath : number[]        = [];




  
  ngOnInit() : void {
    this.CurrentItem = this.CategoryData;
    this.CategoryPath.push( this.GroupIndex );
  }



 

  goToChildCategory( index : number ) : void {

    const currentItem : CategoryIndex = this.CurrentItem;


    this.PrevItems.push( this.CurrentItem );

    this.CurrentItem = currentItem.subCategories![ index ];

    this.addToCategoryPath( index );


  }

  
  
  goToParentCategory() : void {

    this.CurrentItem = this.PrevItems[ this.PrevItems.length - 1 ];

    this.PrevItems.pop();

    this.removeLastFromCategoryPath();

  }

  
  
  private addToCategoryPath(index : number) : void {
    this.CategoryPath.push( index );
  }



  private removeLastFromCategoryPath() : void {
    this.CategoryPath.pop();
  }



  sendSelectedCategory() : void {

    this.CategoryResponse.emit({
      categoryPath : this.CategoryPath,
      responseType : 'category',
      categoryId   : this.CategoryData.id
    });

  }



  sendSelectedItem(index : number, id : string) : void {

    this.CategoryResponse.emit({
      categoryPath : this.CategoryPath,
      responseType : 'item',
      itemIndex    : index,
      ingredientId : id
    });

  }



  
}
