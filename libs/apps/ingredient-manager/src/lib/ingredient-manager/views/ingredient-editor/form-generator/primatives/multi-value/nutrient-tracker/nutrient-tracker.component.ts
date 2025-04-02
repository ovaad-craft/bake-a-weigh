/*

NutrientTracker

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
import { NutrientTrackerGroup } from 'undefined';

@Component({
  selector: 'lib-nutrient-tracker',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './nutrient-tracker.component.html',
  styleUrls: ['./nutrient-tracker.component.css'],
})
export class NutrientTrackerComponent {
  @Input() Control!: FormGroup<NutrientTrackerGroup>;
  @Input() Label!: string;
}
