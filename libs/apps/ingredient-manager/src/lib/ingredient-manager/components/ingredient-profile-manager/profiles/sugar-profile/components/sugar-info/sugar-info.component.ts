/*

SugarInfo

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
import { CaneInfoGroup, SugarInfoGroupType, SugarInfoPartial } from '../../../../../../views/ingredient-editor/form-generator/form-types';
import { SugarInfoGroupComponent } from '../sugar-info-group/sugar-info-group.component';
import { SugarInfoPartialComponent } from '../sugar-info-partial/sugar-info-partial.component';

@Component({
  selector: 'lib-sugar-info',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SugarInfoGroupComponent,
    SugarInfoPartialComponent
  ],
  templateUrl: './sugar-info.component.html',
  styleUrls: ['./sugar-info.component.css'],
})
export class SugarInfoComponent {

  @Input() Control!  : SugarInfoGroupType;
  @Input() InfoType! : string;
  @Input() Label!    : string;



  

  getPartialInfo() : FormGroup< SugarInfoPartial > {

    return this.Control as FormGroup< SugarInfoPartial >;
    
  }
  
  getCaneInfo() : FormGroup< CaneInfoGroup > {

    return this.Control as FormGroup< CaneInfoGroup >;

  }



}
