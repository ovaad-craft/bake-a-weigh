/*

DairyProfile

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
  selector: 'lib-dairy-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dairy-profile.component.html',
  styleUrls: ['./dairy-profile.component.css'],
})
export class DairyProfileComponent {
  @Input() Label = 'item label';
  @Input() Control!: FormGroup<DairyProfileGroup>;
}
