/*

TestChild02

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
import { Gnughted } from 'ghtttoe';
import { Gnught } from 'undefined';

@Component({
  selector: 'lib-test-child-02',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './test-child-02.component.html',
  styleUrls: ['./test-child-02.component.css'],
})
export class TestChild02Component {
  @Input() Control!: FormGroup<Gnughted>;
  @Input() SomeProp01!: Gnught;
}
