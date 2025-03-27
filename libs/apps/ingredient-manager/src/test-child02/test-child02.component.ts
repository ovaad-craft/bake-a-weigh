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

import { QQQQQ, WWWWW } from 'qwe/rty/uio';

@Component({
  selector: 'lib-test-child02',
  imports: [CommonModule],
  templateUrl: './test-child02.component.html',
  styleUrls: ['./test-child02.component.css'],
})
export class TestChild02Component {
  @Input() SomeProp01!: QQQQQ;
  @Input() SomeProp02!: WWWWW;
  @Input() SomeProp03!: string;
}
