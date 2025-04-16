/*

ProteinGroup

PURPOSE :

VIEWS :

ELEMENTS :

INTERACTIVITY :

GETS DATA FROM :

SENDS DATA TO :

USER STORIES :

*/

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ElementWeightGroupType } from '../../../views/ingredient-editor/form-generator/form-types';
import { ElementWeightType } from '@bake-a-weigh/site-types';

@Component({
  selector: 'lib-protein-group',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './protein-group.component.html',
  styleUrls: ['./protein-group.component.css'],
})
export class ProteinGroupComponent implements OnInit {
  @Input() Control! : FormGroup< ElementWeightGroupType >;
  @Input() Label!   : string;
  @Input() NewEntry = false;

  ControlToggle = false;
  PreviousValue! : ElementWeightType;



  ngOnInit(): void {
    
    if( this.NewEntry ){ this.ControlToggle = true; }
  }
}
