/*

IngredientProfileManager

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
import { DairyProfileGroup, ExtractProfileGroup, FlourProfileGroup, GrainProfileGroup, HerbProfileGroup, IngredientDataGroupType, NutProfileGroup, OilProfileGroup, ProduceProfileGroup, SaltProfileGroup, SpeciesPrimative, SugarProfileGroup, SweetenerProfileGroup } from '../../views/ingredient-editor/form-generator/form-types';
import { DairyProfileComponent } from './profiles/dairy-profile/dairy-profile.component';
import { ExtractProfileComponent } from './profiles/extract-profile/extract-profile.component';
import { FlourProfileComponent } from './profiles/flour-profile/flour-profile.component';
import { GrainProfileComponent } from './profiles/grain-profile/grain-profile.component';
import { HerbProfileComponent } from './profiles/herb-profile/herb-profile.component';
import { NutProfileComponent } from './profiles/nut-profile/nut-profile.component';
import { OilProfileComponent } from './profiles/oil-profile/oil-profile.component';
import { ProduceProfileComponent } from './profiles/produce-profile/produce-profile.component';
import { SaltProfileComponent } from './profiles/salt-profile/salt-profile.component';
import { SugarProfileComponent } from './profiles/sugar-profile/sugar-profile.component';
import { SweetenerProfileComponent } from './profiles/sweetener-profile/sweetener-profile.component';
import { IngredientProfileType } from '@bake-a-weigh/site-types';
import { SeedProfileComponent } from './profiles/seed-profile/seed-profile.component';
import { AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-ingredient-profile-manager',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DairyProfileComponent,
    ExtractProfileComponent,
    FlourProfileComponent,
    GrainProfileComponent,
    HerbProfileComponent,
    NutProfileComponent,
    SeedProfileComponent,
    OilProfileComponent,
    ProduceProfileComponent,
    SaltProfileComponent,
    SugarProfileComponent,
    SweetenerProfileComponent

  ],
  templateUrl: './ingredient-profile-manager.component.html',
  styleUrls: ['./ingredient-profile-manager.component.css'],
})
export class IngredientProfileManagerComponent {

  @Input() Control!     : IngredientDataGroupType;
  @Input() ProfileType! : IngredientProfileType | null | undefined;






  getFlourProfile() : FormGroup< FlourProfileGroup > {

    return this.Control as FormGroup< FlourProfileGroup >;
    
  }



  getSaltProfile() : FormGroup< SaltProfileGroup > {

    return this.Control as FormGroup< SaltProfileGroup >;

  }


  getSugarProfile() : FormGroup< SugarProfileGroup > {

    return this.Control as FormGroup< SugarProfileGroup >;

  }



  getGrainProfile() : FormGroup< GrainProfileGroup > {

    return this.Control as FormGroup< GrainProfileGroup >;

  }



  getNutProfile() : FormGroup< NutProfileGroup > {

    return this.Control as FormGroup< NutProfileGroup >;

  }



  getSeedProfile() : FormGroup< SpeciesPrimative > {

    return this.Control as FormGroup< SpeciesPrimative >;

  }



  getDairyProfile() : FormGroup< DairyProfileGroup > {

    return this.Control as FormGroup< DairyProfileGroup >;

  }



  getProduceProfile() : FormGroup< ProduceProfileGroup > {

    return this.Control as FormGroup< ProduceProfileGroup >;

  }



  getOilProfile() : FormGroup< OilProfileGroup > {

    return this.Control as FormGroup< OilProfileGroup >;

  }



  getHerbProfile() : FormGroup< HerbProfileGroup > {

    return this.Control as FormGroup< HerbProfileGroup >;

  }



  getExtractProfile() : FormGroup< ExtractProfileGroup > {

    return this.Control as FormGroup< ExtractProfileGroup >;

  }



  getSweetenerProfile() : FormGroup< SweetenerProfileGroup > {

    return this.Control as FormGroup< SweetenerProfileGroup >;

  }



 /* getGroup = this.getControlGroup.bind( this );

  getControlGroup< GroupType extends Record< string, AbstractControl< any, any > > >() : FormGroup< GroupType > {

    return this.Control as unknown as FormGroup< GroupType >;

  }*/

}
