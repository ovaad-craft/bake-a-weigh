/*

TotalSugars

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
import { TotalSugarsGroup } from 'undefined';

@Component({
  selector: 'lib-total-sugars',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './total-sugars.component.html',
  styleUrls: ['./total-sugars.component.css'],
})
export class TotalSugarsComponent {
  @Input() Control!: FormGroup<TotalSugarsGroup>;
  @Input() Label!: string;
}
