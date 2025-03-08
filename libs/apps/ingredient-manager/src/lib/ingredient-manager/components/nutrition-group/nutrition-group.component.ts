/*

NutritionGroup

PURPOSE :

VIEWS :

ELEMENTS :

INTERACTIVITY :

GETS DATA FROM :

SENDS DATA TO :

USER STORIES :

*/





import { Component, Input }    from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NutritionGroup } from '../../views/ingredient-editor/form-generator/form-types';





@Component({
    selector    : 'lib-nutrition-group',
    imports     : [ CommonModule, FormsModule, ReactiveFormsModule ],
    templateUrl : './nutrition-group.component.html',
    styleUrls   : [ './nutrition-group.component.css' ]
})

export class NutritionGroupComponent {

    @Input() Control! : FormGroup< NutritionGroup >;
}