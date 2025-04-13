/*

TotalFat

PURPOSE :

VIEWS :

ELEMENTS :

INTERACTIVITY :

GETS DATA FROM :

SENDS DATA TO :

USER STORIES :

*/

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { NutrientCategoryGroup } from 'undefined';

@Component({
  selector: 'lib-total-fat',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './total-fat.component.html',
  styleUrls: ['./total-fat.component.css'],
})
export class TotalFatComponent {
  @Input() Control!: FormGroup<NutrientCategoryGroup>;
  @Input() Label!: string;
}
