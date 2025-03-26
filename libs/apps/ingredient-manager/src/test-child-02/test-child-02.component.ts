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

@Component({
  selector: 'lib-test-child-02',
  imports: [CommonModule],
  templateUrl: './test-child-02.component.html',
  styleUrls: ['./test-child-02.component.css'],
})
export class TestChild02Component {
  @Input() SomeProp01!: string;
  @Input() SomeProp02!: number;
}
