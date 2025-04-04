/*

SugarInfoGroup

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
import { CaneInfoGroup } from 'undefined';

@Component({
  selector: 'lib-sugar-info-group',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sugar-info-group.component.html',
  styleUrls: ['./sugar-info-group.component.css'],
})
export class SugarInfoGroupComponent {
  @Input() Control!: FormGroup<CaneInfoGroup>;
  @Input() Label!: string;
}
