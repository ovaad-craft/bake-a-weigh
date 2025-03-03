import { FormControl, FormGroup } from "@angular/forms";
import { WeightType } from "@bake-a-weigh/site-types";











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



export interface IngredientCategoryGroup{

    name : FormControl< string | null>;
    subCategory? : FormGroup< IngredientCategoryGroup >;

}