import { FormControl, FormGroup } from "@angular/forms";
import { FlourClassification, FlourType, SaltConsistency, SaltType, WeightType } from "@bake-a-weigh/site-types";











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