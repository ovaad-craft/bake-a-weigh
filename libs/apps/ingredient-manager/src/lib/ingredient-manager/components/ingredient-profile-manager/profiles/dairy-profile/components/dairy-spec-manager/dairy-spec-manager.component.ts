/*

DairySpecManager

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
import { ButterSpecsGroup, CheeseSpecsGroup, CreamSpecsGroup, DairySpecGroupType, MilkSpecsGroup, YogurtSpecsGroup } from '../../../../../../views/ingredient-editor/form-generator/form-types';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MilkSpecsComponent } from '../milk-specs/milk-specs.component';
import { CreamSpecsComponent } from '../cream-specs/cream-specs.component';
import { YogurtSpecsComponent } from '../yogurt-specs/yogurt-specs.component';
import { ButterSpecsComponent } from '../butter-specs/butter-specs.component';
import { CheeseSpecsComponent } from '../cheese-specs/cheese-specs.component';
import { DairyForm } from '@bake-a-weigh/site-types';


@Component({
  selector: 'lib-dairy-spec-manager',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MilkSpecsComponent,
    CreamSpecsComponent,
    YogurtSpecsComponent,
    ButterSpecsComponent,
    CheeseSpecsComponent

  ],
  templateUrl: './dairy-spec-manager.component.html',
  styleUrls: ['./dairy-spec-manager.component.css'],
})
export class DairySpecManagerComponent {
  @Input() Control!: DairySpecGroupType;
  @Input() ControlType! : DairyForm;
  @Input() Label!: string;



  getMilkSpecs() : FormGroup< MilkSpecsGroup > {
    
    return this.Control as FormGroup< MilkSpecsGroup >;

  }

  getCreamSpecs() : FormGroup< CreamSpecsGroup > {

    return this.Control as FormGroup< CreamSpecsGroup >;

  }

  getYogurtSpecs() : FormGroup< YogurtSpecsGroup > {

    return this.Control as FormGroup< YogurtSpecsGroup >;

  }

  getButterSpecs() : FormGroup< ButterSpecsGroup > {

    return this.Control as FormGroup< ButterSpecsGroup >;

  }

  getCheeseSpecs() : FormGroup< CheeseSpecsGroup > {

    return this.Control as FormGroup< CheeseSpecsGroup >;
    
  }

}
