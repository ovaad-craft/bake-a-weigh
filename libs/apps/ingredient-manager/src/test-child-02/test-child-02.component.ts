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
import { QQQQQ } from 'qwe/rty/uio';
import { WWWWWWW } from 'asd/fgh/jkl';
import { EEEEE, RRRRR } from 'zxc/vbn/mm';

@Component({
  selector: 'lib-test-child-02',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './test-child-02.component.html',
  styleUrls: ['./test-child-02.component.css'],
})
export class TestChild02Component {
  @Input() Control!: FormGroup<QQQQQ>;
  @Input() Label!: string;
  @Input() SomeProp01!: EEEEE;
  @Input() SomeProp02!: RRRRR;
  @Input() SomeProp03!: boolean;

  addControl(): void {
    this.Control.controls.someArrayControl.controls.push(
      new FormGroup<WWWWWWW>({
        /* set up defaults */
      })
    );
  }

  removeControl(index: number): void {
    this.Control.controls.someArrayControl.controls.removeAt(index);
  }
}
