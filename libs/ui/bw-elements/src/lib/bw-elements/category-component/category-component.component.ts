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
 > Triggers an @Output to let parent know when "add category" button is clicked.
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







import { Component, input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryIndex } from '@bake-a-weigh/site-types';

@Component({
  selector: 'lib-category-component',
  imports: [CommonModule, AddButtonComponent, BackButtonComponent, CategoryItemComponent],
  templateUrl: './category-component.component.html',
  styleUrl: './category-component.component.css',
})
export class CategoryComponentComponent {
  CategoryData = input<CategoryIndex>();
}
