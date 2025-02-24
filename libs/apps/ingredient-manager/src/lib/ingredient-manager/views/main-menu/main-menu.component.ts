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



const DemoCategories : CategoryIndex = {
  name: 'Salts',
  id: 'salts_category_id1100011',
  items: [
    {
      name: 'some salt 01',
      id: 'some_salt_01',
      icon: 'some-icon'
    },
    {
      name: 'some salt 02',
      id: 'some_salt_02',
      photo: 'some-photo'
    },
    {
      name: 'some salt 03',
      id: 'some_salt_03',
      icon: 'some-icon'
    },
  ],
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
      ]
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
      ]
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
      ]
    }
  ]
}





import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryIndex } from '@bake-a-weigh/site-types';
import { CategoryComponentComponent } from '@bake-a-weigh/bw-elements';

@Component({
  selector: 'lib-im-main-menu',
  imports: [CommonModule, CategoryComponentComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
})
export class MainMenuComponent {}
