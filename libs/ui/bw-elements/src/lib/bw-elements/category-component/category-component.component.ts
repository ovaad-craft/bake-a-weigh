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
    this.CategoryResponse.emit( { categoryPath : this.CategoryPath, responseType: 'category' } );
  }



  sendSelectedItem(index : number) : void {
    this.CategoryResponse.emit( { categoryPath : this.CategoryPath, itemIndex : index, responseType: 'item' } );
  }



  
}
