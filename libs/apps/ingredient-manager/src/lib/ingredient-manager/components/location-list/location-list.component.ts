/*

LocationList

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

import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { FormArrayControlList } from '../../views/ingredient-editor/form-generator/form-types';
import { TextInputComponent } from '@form-controls';

@Component({
  selector: 'lib-location-list',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent
  ],
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
})
export class LocationListComponent {
  @Input() Control! : FormGroup< FormArrayControlList< string > >;
  @Input() Label!   : string;

  addControl(): void {
    this.Control.controls.list.controls.push(
      new FormControl<string | null>(null)
    );
  }

  removeControl(index: number): void {
    this.Control.controls.list.removeAt(index);
  }
}
