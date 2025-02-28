/*export function siteTypes(): string {
  return 'site-types';
}*/


export interface IngredientNote{
  title       : string;
  description : string;
}

export interface Nutrient{
  name   : string;
  amount : number;
}

export interface Nutrition{
  servingSize : number;
  nutrients   : Nutrient[];
  ingredients : string[];
}

export interface IngredientCategory{
  name         : string;
  subCategory? : IngredientCategory;
}

export interface IngredientProfile{
  name       : string;
  brand      : string;
  id         : string;
  photo?     : string;
  nutrition? : Nutrition;
  notes?     : IngredientNote[];
  //data?      : WhereItGetsInteresting;  // <---
  locations  : IngredientCategory[];
}