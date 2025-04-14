import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";
import { ButterType, CaneType, CheeseHydrationType, CheeseState, CheeseTextureType, CreamState, CreamType, DairyForm, DairyType, ExtractState, ExtractType, FlourClassification, FlourType, IngredientProfileType, MilkState, MilkType, NutrientAmount, NutrientTracker, OilState, PlantPart, ProduceState, ProduceType, SaltConsistency, SaltType, SugarConsistencyType, SugarType, SweetenerFormType, WeightType, YogurtType } from "@bake-a-weigh/site-types";











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



export interface NutrientCategoryGroup{

    name?       : FormControl< string | null >;
    totalAmount : FormGroup< ElementWeightGroupType >;
    nutrients?  : FormGroup< FormArrayGroupList< NutrientCategoryGroup > >;
    
}

export interface TotalFatCategoryGroup{

    totalAmount   : FormGroup< ElementWeightGroupType >;
    saturatedFat? : FormGroup< ElementWeightGroupType >;
    transFat?     : FormGroup< ElementWeightGroupType >;
    monounsaturatedFat? : FormGroup< ElementWeightGroupType >;
    polyunsaturatedFat? : FormGroup< ElementWeightGroupType >;

}



export interface TotalSugarsGroup{

    totalAmount : FormGroup< ElementWeightGroupType >;
    addedSugars? : FormGroup< ElementWeightGroupType >;

}



export interface TotalCarbohydratesGroup{

    totalAmount    : FormGroup< ElementWeightGroupType >;
    dietaryFiber?  : FormGroup< ElementWeightGroupType >;
    solubleFiber?  : FormGroup< ElementWeightGroupType >;
    totalSugars?   : FormGroup< TotalSugarsGroup >;
    sugarAlcohols? : FormGroup< ElementWeightGroupType >;

}



export interface NutrientTrackerGroup{

    name        : FormControl< string | null >;
    servingSize : FormGroup< WeightMeasurementPrimative >;
    amount      : FormGroup< WeightMeasurementPrimative >;

}

export interface FormArrayControlList< T > {
    list : FormArray< FormControl< T | null > >;
}



export interface FormArrayGroupList< T extends { [ K in keyof T ] : AbstractControl< any, any > } > {

    list : FormArray< FormGroup< T > >;

}



export interface NutritionGroup {

    servingSize          : FormGroup< ElementWeightGroupType >;
    calories             : FormControl< number | null >;
    totalFat?            : FormGroup< TotalFatCategoryGroup >;
    cholesterol?         : FormGroup< ElementWeightGroupType >;
    sodium?              : FormGroup< ElementWeightGroupType >;
    totalCarbohydrates?  : FormGroup< TotalCarbohydratesGroup >;
    protein?             : FormGroup< NutrientCategoryGroup >;
    vitaminsAndMinerals? : FormGroup< FormArrayGroupList< NutrientGroupType > >;
    ingredients          : FormGroup< FormArrayControlList< string > >;

}



export interface IngredientCategoryGroup{

    name : FormControl< string | null>;
    subCategory? : FormGroup< IngredientCategoryGroup >;

}



export interface FlourProfileGroup{

    type           : FormControl< FlourType | null >;
    classification : FormControl< FlourClassification | null >;
    bleached       : FormControl< boolean | null >;
    maxHydration?  : FormControl< number  | null >;
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



export type SugarInfoGroupType = FormGroup< SugarInfoPartial > | FormGroup< CaneInfoGroup >;



export type SugarInfoGroupMap = {

    'cane'    : FormGroup< CaneInfoGroup >;
    'coconut' : FormGroup< SugarInfoPartial >;
    'palm'    : FormGroup< SugarInfoPartial >;
    'other'   : FormGroup< SugarInfoPartial >;

}



export interface SugarProfileGroup {

    type     : FormControl< SugarType | null >;
    infoType : FormControl< string | null >;
    info?  : SugarInfoGroupType;
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

    species : FormControl< string  | null >;
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



export interface YogurtSpecsGroup {

    type    : FormControl< YogurtType | null >;
    flavor? : FormControl< string | null >;

}



export interface ButterSpecsGroup {

    type : FormControl< ButterType | null >;

}



export interface CheeseSpecsGroup {

    kind      : FormControl< string | null >;
    texture   : FormControl< CheeseTextureType | null >;
    hydration : FormControl< CheeseHydrationType | null >;
    state     : FormControl< CheeseState | null >;

}



export type DairySpecGroupType =
    FormGroup< MilkSpecsGroup >   |
    FormGroup< CreamSpecsGroup >  |
    FormGroup< YogurtSpecsGroup > |
    FormGroup< ButterSpecsGroup > |
    FormGroup< CheeseSpecsGroup >;



export interface DairyProfileGroup {

    type        : FormControl< DairyType | null >;
    form        : FormControl< DairyForm | null >;
    specs       : DairySpecGroupType;
    pasturized  : FormControl< boolean | null >;
    homogenized : FormControl< boolean | null >;

}



export interface ProduceProfileGroup {

    type  : FormControl< ProduceType  | null >;
    state : FormControl< ProduceState | null >;

}



export interface OilProfileGroup {

    type  : FormControl< string   | null >;
    state : FormControl< OilState | null >;

}



export interface HerbProfileGroup {

    species : FormControl< string | null >;
    part    : FormControl< PlantPart | null >;

}



export interface SweetenerProfileGroup{

    type : FormControl< string | null >;
    form : FormControl< SweetenerFormType | null >;

}



export interface ExtractProfileGroup{

    type  : FormControl< ExtractType  | null >;
    state : FormControl< ExtractState | null >;
    
}



export type IngredientDataGroupType =
    FormGroup< FlourProfileGroup >   |
    FormGroup< SaltProfileGroup >    |
    FormGroup< SugarProfileGroup >   |
    FormGroup< GrainProfileGroup >   |
    FormGroup< NutProfileGroup >     |
    FormGroup< SpeciesPrimative >    |
    FormGroup< DairyProfileGroup >   |
    FormGroup< ProduceProfileGroup > |
    FormGroup< OilProfileGroup >     |
    FormGroup< HerbProfileGroup >    |
    FormGroup< ExtractProfileGroup > |
    FormGroup< SweetenerProfileGroup >;



    export interface IngredientForm {

        name         : FormControl< string | null >;
        brand        : FormControl< string | null >;
        id           : FormControl< string | null >;
        photo?       : FormControl< string | null >;
        icon?        : FormControl< string | null >;
        nutrition?   : FormGroup< NutritionGroup >;
        notes?       : FormGroup< FormArrayGroupList< IngredientNoteFormGroup > >;
        profileType? : FormControl< IngredientProfileType | null >;
        data?        : IngredientDataGroupType;
        locations    : FormGroup< FormArrayControlList< string > >;
        //locations    : FormArray< FormControl< string | null > >;

    }





export type OvaadControlTypes = 'text-field' | 'text-area' | 'number-field' | 'counter' | 'radio' | 'select' | 'checkbox' | 'range' | 'group' | 'array';

type OvaadControlSpecs = {
    control : OvaadControlTypes;
    default? : string | number | boolean;
    label? : string;
}

//type OvaadControlSPecObject = [ prop : string ] : OvaadControlSpecs;

/*export interface OvaadControlSpecs<[CONTROLTYPES]> {
    control : CONTROLTYPES;
    default? : DEFAULT;
    label? : LABEL;
}*/

export interface OvaadControlSpecObject {
    [ prop : string ] : OvaadControlSpecs;
}

export interface OvaadControlSpecProp{
    _$_controlSpecs : OvaadControlSpecObject;
}


export interface SomeInterfaceExperiment extends OvaadControlSpecProp{
    propA : string;
    propB : number;
    _$_controlSpecs : {
        propA : {
            control : 'text-field';
            label : 'Item Name';
        };
        propB : {
            control : 'number-field';
            label : 'Quantity'
        };

    };
    
}

export interface SomeOtherInterface{
    propC : SomeInterfaceExperiment;
}