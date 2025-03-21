/*

TestChild

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
  selector: 'lib-test-child',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css'],
})
export class TestChildComponent {
  @Input() Label = 'item label';
  @Input() Control!: FormGroup<ElementWeightGroupType>;
}
