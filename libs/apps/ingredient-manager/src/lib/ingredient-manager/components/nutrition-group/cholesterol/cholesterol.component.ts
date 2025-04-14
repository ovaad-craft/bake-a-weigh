/*

Cholesterol

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
import { ElementWeightGroupType } from 'undefined';

@Component({
  selector: 'lib-cholesterol',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cholesterol.component.html',
  styleUrls: ['./cholesterol.component.css'],
})
export class CholesterolComponent {
  @Input() Control!: FormGroup<ElementWeightGroupType>;
  @Input() Label!: string;
}
