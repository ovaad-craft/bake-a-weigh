/*

SweetenerProfile

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
  selector: 'lib-sweetener-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sweetener-profile.component.html',
  styleUrls: ['./sweetener-profile.component.css'],
})
export class SweetenerProfileComponent {
  @Input() Label = 'item label';
  @Input() Control!: FormGroup<SweetenerProfileGroup>;
}
