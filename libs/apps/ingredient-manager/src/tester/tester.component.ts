/*

Tester

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
import { QQQQQ, RRRRRR } from 'qwe/rty/uio';
import { WWWWWW, EEEEEE } from 'asd/fgh/jkl';

@Component({
  selector: 'lib-tester',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css'],
})
export class TesterComponent {
  @Input() Control!: FormGroup<QQQQQ>;
  @Input() SomeProp01!: WWWWWW;
  @Input() SomeProp02!: EEEEEE;
  @Input() SomeProp03!: RRRRRR;
  @Input() SomeProp04!: string;
  @Input() SomeProp05!: number;
}
