/*

Subcategory Button


PURPOSE :
 > Represent an individual item the user can select.


ELEMENTS :
 > img / for cover photo (optional)
 > svg / for icon (optional)
 > h5  / for item name
 


VIEWS : none


INTERACTIVITY : none


FUNCTIONALITY : none


SENDS DATA TO : nowhere


GETS DATA FROM :
 > Category Component


ROUTES TO : nowhere


USER STORY :
 > User should see the cover photo if one is provided.
 > User should see the icon if one is provided.
 > User should see the name of the item.



*/







import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryIndexItem } from '@bake-a-weigh/site-types';

@Component({
  selector: 'lib-bwui-category-item',
  imports: [CommonModule],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.css',
})
export class CategoryItemComponent {
  @Input() ItemData! : CategoryIndexItem;
}
