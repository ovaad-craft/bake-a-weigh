/*

Subcategory Button


PURPOSE :
 > Aid User in navigating to the items they'd like to interact with.


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
import { CategoryIndex } from '@bake-a-weigh/site-types';

@Component({
  selector: 'lib-bwui-subcategory-button',
  imports: [CommonModule],
  templateUrl: './subcategory-button.component.html',
  styleUrl: './subcategory-button.component.css',
})
export class SubcategoryButtonComponent {
  @Input() SubcategoryData! : CategoryIndex;
}
