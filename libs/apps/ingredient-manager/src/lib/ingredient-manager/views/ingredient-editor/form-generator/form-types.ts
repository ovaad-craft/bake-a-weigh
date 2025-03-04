import { FormControl, FormGroup } from "@angular/forms";
import { CaneType, CreamState, CreamType, FlourClassification, FlourType, MilkState, MilkType, NutrientAmount, NutrientTracker, SaltConsistency, SaltType, SugarConsistencyType, SugarType, WeightType } from "@bake-a-weigh/site-types";











export interface AmountPrimative{

    amount : FormControl< number | null >

}



export interface WeightTypePrimative{

    weightType  : FormControl< WeightType | null >

}

export interface WeightMeasurementPrimative extends AmountPrimative, WeightTypePrimative{}



export interface IngredientNoteFormGroup{

    title       : FormControl< string >,
    description : FormControl< string >

}



export interface ElementWeightGroupType extends WeightMeasurementPrimative{

    percentage? : FormControl< number | null >

}



export interface NutrientGroupType extends ElementWeightGroupType{

    name : FormControl< string | null >

}



export interface NutrientTrackerGroup{

    name        : FormControl< string | null >;
    servingSize : FormGroup< WeightMeasurementPrimative >;
    amount      : FormGroup< WeightMeasurementPrimative >;

}



export interface IngredientCategoryGroup{

    name : FormControl< string | null>;
    subCategory? : FormGroup< IngredientCategoryGroup >;

}



export interface FlourProfileGroup{

    type           : FormControl< FlourType | null >;
    classification : FormControl< FlourClassification | null >;
    bleached       : FormControl< boolean | null >;
    maxHydration?  : FormControl< number | null >;
    protein?       : FormGroup< NutrientTrackerGroup >;

}



export interface SaltProfileGroup{

    type        : FormControl< SaltType | null >;
    consistency : FormControl< SaltConsistency | null >;
    iodized     : FormControl< boolean | null >;
    sodium?     : FormGroup< NutrientTrackerGroup >;

}



export interface SugarInfoPartial {

    consistency : FormControl< SugarConsistencyType | null >,
    
}



export interface CaneInfoGroup extends SugarInfoPartial {

    type : FormControl< CaneType | null >

}



export type SugarInfoGroupMap = {

    'cane'    : FormGroup< CaneInfoGroup >;
    'coconut' : FormGroup< SugarInfoPartial >;
    'palm'    : FormGroup< SugarInfoPartial >;
    'other'   : FormGroup< SugarInfoPartial >;

}



export interface SugarProfileGroup {

    type   : FormControl< SugarType | null >;
    info   : FormGroup< SugarInfoPartial > | FormGroup< CaneInfoGroup >;
    source : FormControl< string | null >;

}



export interface GrainProfileGroup {

    protein?       : FormGroup< NutrientTrackerGroup >;
    maxObsorption? : FormControl< number | null >;

}

export interface SpeciesPrimative {

    species :  FormControl< string  | null >;

}


export interface NutProfileGroup extends SpeciesPrimative {

    roasted : FormControl< boolean | null >;
    salted  : FormControl< boolean | null >;

}



export interface MilkSpecsGroup {

    type  : FormControl< MilkType  | null >;
    state : FormControl< MilkState | null >;

}



export interface CreamSpecsGroup {

    type  : FormControl< CreamType | null >;
    state : FormControl< CreamState | null >;
}