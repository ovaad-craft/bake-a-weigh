import { FormControl } from "@angular/forms";
import { WeightType } from "@bake-a-weigh/site-types";











export interface IngredientNoteFormGroup{

    title       : FormControl< string >,
    description : FormControl< string >

}



export interface ElementWeightGroupType{

    amount      : FormControl< number | null >,
    weightType  : FormControl< WeightType | null >,
    percentage? : FormControl< number | null >

}



export interface NutrientGroupType extends ElementWeightGroupType{

    name : FormControl< string | null >

}