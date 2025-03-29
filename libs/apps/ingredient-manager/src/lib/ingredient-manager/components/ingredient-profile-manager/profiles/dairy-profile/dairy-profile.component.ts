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
import { MilkSpecsComponent } from "./components/milk-specs/milk-specs.component";
import { CreamSpecsComponent } from './components/cream-specs/cream-specs.component';
import { YogurtSpecsComponent } from './components/yogurt-specs/yogurt-specs.component';
import { ButterSpecsComponent } from './components/butter-specs/butter-specs.component';
import { CheeseSpecsComponent } from './components/cheese-specs/cheese-specs.component';





@Component({
  selector    : 'lib-dairy-profile',
  templateUrl : './dairy-profile.component.html',
  styleUrls   : ['./dairy-profile.component.css'],
  imports : [
    CommonModule,
    ReactiveFormsModule,
    SelectInputComponent,
    ToggleInputComponent,
    MilkSpecsComponent,
    CreamSpecsComponent,
    YogurtSpecsComponent,
    ButterSpecsComponent,
    CheeseSpecsComponent
  ]
})

    
export class DairyProfileComponent {

    @Input() Label = 'item label';
    @Input() Control!: FormGroup<DairyProfileGroup>;

}
