/*

Category Component


PURPOSE :
 > Presents a group of items and or sub categories of items to the user. 


ELEMENTS :
 > Add Item Button
 > Add Category Button
 > Category Item Component
 > SubCategory Button
 > Back Button


VIEWS : none


INTERACTIVITY :
 > Emits data about item up through an @Output when a Category Item is clicked.
 > Emits data about category through an @Output to parent when "add item" button is clicked.
 > Refreshes list of items when a subcategory button is clicked.
 > Has "next, prev" functionality for navigating sub categories of items.


FUNCTIONALITY : none


SENDS DATA TO :
 > Parent Component


GETS DATA FROM :
 > Parent Component


ROUTES TO : nowhere


USER STORY :
 >
 >



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
  selector: 'lib-category-component',
  imports: [
    CommonModule,
    AddButtonComponent,
    BackButtonComponent,
    SubcategoryButtonComponent,
    CategoryItemComponent,
    EditButtonComponent
  ],
  templateUrl: './category-component.component.html',
  styleUrl: './category-component.component.css',
})
export class CategoryComponentComponent implements OnInit {

  @Input() SingleItemName    = 'item';
  @Input() GroupName         = 'category';
  @Input() CategoryData!     : CategoryIndex;
  @Output() SelectedItem     : EventEmitter<CategoryResponse> = new EventEmitter<CategoryResponse>();
  @Output() SelectedCategory : EventEmitter<CategoryResponse> = new EventEmitter<CategoryResponse>();
  @Output() AddNewItem       : EventEmitter<void> = new EventEmitter<void>()
  CurrentItem!               : CategoryIndex;
  PrevItems                  : CategoryIndex[] = [];
  CategoryPath               : number[] = [];




  ngOnInit(){ this.CurrentItem = this.CategoryData }



 

  goToChildCategory(index : number): void {

    const currentItem : CategoryIndex = this.CurrentItem;

    this.PrevItems.push(this.CurrentItem);
    this.CurrentItem = currentItem.subCategories![index];
    this.addToCategoryPath(index);

  }

  goToParentCategory() : void {

    this.CurrentItem = this.PrevItems[this.PrevItems.length - 1];
    this.PrevItems.pop();
    this.removeLastFromCategoryPath();

  }

  addToCategoryPath(index : number) : void {
    this.CategoryPath.push(index);
  }

  removeLastFromCategoryPath() : void {
    this.CategoryPath.pop();
  }

  sendSelectedCategory() : void {
    this.SelectedCategory.emit({categoryPath: this.CategoryPath});
  }

  sendSelectedItem(index : number) : void {
    this.SelectedItem.emit({categoryPath: this.CategoryPath, itemIndex: index});
  }
}
