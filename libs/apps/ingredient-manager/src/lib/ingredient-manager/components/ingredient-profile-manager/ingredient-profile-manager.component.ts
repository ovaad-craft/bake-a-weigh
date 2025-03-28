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

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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

@Component({
  selector: 'lib-ingredient-profile-manager',
  imports: [
    CommonModule,
    DairyProfileComponent,
    ExtractProfileComponent,
    FlourProfileComponent,
    GrainProfileComponent,
    HerbProfileComponent,
    NutProfileComponent,
    OilProfileComponent,
    ProduceProfileComponent,
    SaltProfileComponent,
    SugarProfileComponent,
    SweetenerProfileComponent

  ],
  templateUrl: './ingredient-profile-manager.component.html',
  styleUrls: ['./ingredient-profile-manager.component.css'],
})
export class IngredientProfileManagerComponent {}
