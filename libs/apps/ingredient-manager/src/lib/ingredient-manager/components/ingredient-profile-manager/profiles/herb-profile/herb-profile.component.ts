/*

HerbProfile

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

@Component({
  selector: 'lib-herb-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './herb-profile.component.html',
  styleUrls: ['./herb-profile.component.css'],
})
export class HerbProfileComponent {
  @Input() Label = 'item label';
  @Input() Control!: FormGroup<HerbProfileGroup>;
}
