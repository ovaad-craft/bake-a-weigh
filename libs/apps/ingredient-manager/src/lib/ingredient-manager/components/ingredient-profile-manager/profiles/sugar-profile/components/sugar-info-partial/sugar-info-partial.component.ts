/*

SugarInfoPartial

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
import { SugarInfoPartial } from 'undefined';

@Component({
  selector: 'lib-sugar-info-partial',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sugar-info-partial.component.html',
  styleUrls: ['./sugar-info-partial.component.css'],
})
export class SugarInfoPartialComponent {
  @Input() Control!: FormGroup<SugarInfoPartial>;
  @Input() Label!: string;
}
