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

export interface CategoryIndexItem{
  name: string;
  id: string;
  icon?: string;
  photo?: string;
}

export interface CategoryIndex extends CategoryIndexItem{
  items?: CategoryIndexItem[];
  subCategories?: CategoryIndex[];
}

export type CategoryResponseType = 'category' | 'item' | 'new';
export interface CategoryResponse{
  categoryPath : number[];
  itemIndex? : number;
  responseType : CategoryResponseType;
}