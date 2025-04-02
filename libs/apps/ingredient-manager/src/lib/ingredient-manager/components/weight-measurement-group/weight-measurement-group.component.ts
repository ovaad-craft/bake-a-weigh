/*

WeightMeasurementGroup

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
import { WeightMeasurementPrimative } from 'undefined';

@Component({
  selector: 'lib-weight-measurement-group',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './weight-measurement-group.component.html',
  styleUrls: ['./weight-measurement-group.component.css'],
})
export class WeightMeasurementGroupComponent {
  @Input() Control!: FormGroup<WeightMeasurementPrimative>;
  @Input() Label!: string;
}
