/*

Sodium

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
  selector: 'lib-sodium',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sodium.component.html',
  styleUrls: ['./sodium.component.css'],
})
export class SodiumComponent {
  @Input() Control!: FormGroup<ElementWeightGroupType>;
  @Input() Label!: string;
}
