/*

DairyProfile

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
import { DairyProfileGroup } from '../../../../views/ingredient-editor/form-generator/form-types';
import { SelectInputComponent, ToggleInputComponent } from '@form-controls';
import { DairySpecManagerComponent } from './components/dairy-spec-manager/dairy-spec-manager.component';





@Component({
  selector    : 'lib-dairy-profile',
  templateUrl : './dairy-profile.component.html',
  styleUrls   : ['./dairy-profile.component.css'],
  imports : [
    CommonModule,
    ReactiveFormsModule,
    SelectInputComponent,
    ToggleInputComponent,
    DairySpecManagerComponent,
  ]
})

    
export class DairyProfileComponent {

    @Input() Label = 'item label';
    @Input() Control!: FormGroup< DairyProfileGroup >;

}
