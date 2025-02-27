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







import { Injectable } from '@angular/core';
import { CategoryIndex } from '@bake-a-weigh/site-types';





const DemoCategory : CategoryIndex[] = [
  {
    name: 'Salts',
    id: 'salts_category_id1100011',
    subCategories: [
      {
        name: 'Sea Salts',
        id: 'sea_salts_id220022',
        items: [
          {
            name: 'sea salt 01',
            id: 'sea_salt_01',
            icon: 'some-icon'
          },
          {
            name: 'sea salt 02',
            id: 'sea_salt_02',
            photo: 'some-photo'
          },
          {
            name: 'sea salt 03',
            id: 'sea_salt_03',
            icon: 'some-icon'
          },
          {
            name: 'sea salt 04',
            id: 'sea_salt_04',
            icon: 'some-icon'
          },
          {
            name: 'sea salt 05',
            id: 'sea_salt_05',
            photo: 'some-photo'
          },
          {
            name: 'sea salt 06',
            id: 'sea_salt_06',
            icon: 'some-icon'
          },
        ],
        icon: 'some-icon'
      },
      {
        name: 'Kosher Salts',
        id: 'kosher_salts_id220022',
        items: [
          {
            name: 'kosher salt 01',
            id: 'kosher_salt_01',
            icon: 'some-icon'
          },
          {
            name: 'kosher salt 02',
            id: 'kosher_salt_02',
            photo: 'some-photo'
          }
        ],
        icon: 'some-icon'
      },
      {
        name: 'Table Salts',
        id: 'table_salts_id220022',
        items: [
          {
            name: 'table salt 01',
            id: 'table_salt_01',
            icon: 'some-icon'
          },
          {
            name: 'table salt 02',
            id: 'table_salt_02',
            photo: 'some-photo'
          },
          {
            name: 'table salt 03',
            id: 'table_salt_03',
            photo: 'some-photo'
          }
        ],
        icon: 'some-icon'
      }
    ]
  }
]





@Injectable({
  providedIn: 'root'
})
export class IngredientManagerService {
}
