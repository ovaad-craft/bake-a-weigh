/*

Ingredient Editor

Purpose:
> Allows user to edit the details of an ingredient's profile.


Elements:


Views:
> Nutrition Profile Generator.


Routes To: Nowhere


Interactivity:


Functionality:


User Story:

 */







import { AfterViewInit, Component, computed, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientManagerService } from '../../ingredient-manager.service';
import { IngredientProfile } from '@bake-a-weigh/site-types';
import { FormControl, FormGroup } from '@angular/forms';
import { IngredientForm } from './form-generator/form-types';
import { createIngredientForm } from './form-generator/ingredient-form';





type SomeType01 = 'option01' | 'option02' | 'option03';

interface SomeGroupInterface01 {
  propA01 : string;
  propA02 : SomeType01;
  propA03 : number;
}

interface SomeParentInterface {
  propB01 : string;
  propB02? : SomeGroupInterface01;
  propB03 : number;
}

interface SomeGroupFormGroup01 {
  propA01 : FormControl<string|null>;
  propA02 : FormControl<SomeType01|null>;
  propA03 : FormControl<number|null>;

}

interface SomeParentFormGroup{
  propB01 : FormControl<string|null>;
  propB02? : FormGroup<SomeGroupFormGroup01>;
  propB03 : FormControl<number|null>;
}



function createSomeGroupFormEmpty() : FormGroup<SomeGroupFormGroup01> {

  return new FormGroup<SomeGroupFormGroup01>({
    propA01 : new FormControl<string|null>(null),
    propA02 : new FormControl<SomeType01 | null>(null),
    propA03 : new FormControl<number|null>(null)
  });

}

function createSomeParentFormEmpty() : FormGroup<SomeParentFormGroup>{

  return new FormGroup<SomeParentFormGroup>({
    propB01 : new FormControl<string|null>(null),
    propB02 : createSomeGroupFormEmpty(),
    propB03 : new FormControl<number | null>(null)
  });

}

const DEMODATA : SomeParentInterface = {
  propB01 : 'some val for propB01',
  propB02 : {
    propA01 : 'some val for propA01',
    propA02 : 'option01',
    propA03 : 4
  },
  propB03 : 7
}



function createSomeGroupFormPopulated(data : SomeGroupInterface01) : FormGroup<SomeGroupFormGroup01> {

  return new FormGroup<SomeGroupFormGroup01>({
    propA01 : new FormControl<string|null>(data.propA01),
    propA02 : new FormControl<SomeType01 | null>(data.propA02),
    propA03 : new FormControl<number|null>(data.propA03)
  });

}


/*function createSomeParentFormPopulated(data : SomeParentInterface) : FormGroup<SomeParentFormGroup>{

  return new FormGroup<SomeParentFormGroup>({
    propB01 : new FormControl<string|null>(data.propB01),
    propB02 : createSomeGroupFormPopulated(data.propB02),
    propB03 : new FormControl<number | null>(data.propB03)
  });

}*/

function createSomeGroupFormEitherOr(data? : SomeGroupInterface01) : FormGroup<SomeGroupFormGroup01> {

  return new FormGroup<SomeGroupFormGroup01>({
    propA01 : new FormControl<string|null>(data?.propA01 ?? null),
    propA02 : new FormControl<SomeType01 | null>(data?.propA02 ?? null),
    propA03 : new FormControl<number|null>(data?.propA03 ?? null)
  });

}

function createSomeParentFormEitherOr(data? : SomeParentInterface) : FormGroup<SomeParentFormGroup>{

  return new FormGroup<SomeParentFormGroup>({
    propB01 : new FormControl<string|null>(data?.propB01 ?? null),
    propB02 : (data?.propB02 ? createSomeGroupFormEitherOr(data.propB02) : undefined),
    propB03 : new FormControl<number | null>(data?.propB03 ?? null)
  });

}







@Component({
  selector: 'lib-im-ingredient-editor',
  imports: [CommonModule],
  templateUrl: './ingredient-editor.component.html',
  styleUrl: './ingredient-editor.component.css',
})
export class IngredientEditorComponent implements OnInit/*, AfterViewInit*/{

  Ingredient! : IngredientProfile;

  IngredientEditorForm! : FormGroup< IngredientForm >;
  //DemoForm : FormGroup<SomeParentFormGroup> = createSomeParentFormEitherOr(DEMODATA);

  constructor( private ingredientService : IngredientManagerService ){}

  ngOnInit(): void {
      this.Ingredient = this.ingredientService.getIngredientToEdit();
      this.IngredientEditorForm = createIngredientForm( this.ingredientService.getIngredientToEdit() );
      
      console.log(this.IngredientEditorForm);
  }
    
    /*ngAfterViewInit(): void {
      
      this.IngredientEditorForm = createIngredientForm( this.Ingredient() );
  }*/

}
