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

interface NutrientAmount{
  servingSize : number;
  amount      : number;
}

export interface IngredientCategory{
  name         : string;
  subCategory? : IngredientCategory;
}





export type FlourType = 'wheat' | 'whole wheat' | 'rice' | 'rye'; //there's more but I'm still compiling the list.

export type FlourClassification = 'cake' | 'pastry' | 'all purpose' | 'bread' | '0' | '00' | '000' | '0000';

export interface FlourProfile{
  type           : FlourType | string;
  classification : FlourClassification | string;
  maxHydration?  : number;
  protein?       : NutrientAmount;
  bleached       : boolean;
}



export type SaltType = 'table salt' | 'sea salt' | 'kosher salt';

export type SaltConsistency = 'extra fine' | 'fine' | 'coarse' | 'fine crystal' | 'crystal';

export interface SaltProfile{
  type        : SaltType | string;
  consistency : SaltConsistency | string;
  sodium?     : NutrientAmount;
  iodized     : boolean;
}



export type SugarType = 'cane' | 'coconut' | 'palm' | 'other';

export type CaneType = 'white' | 'light brown' | 'dark brown' | 'raw';

export type SugarConsistencyType = 'powdered' | 'small granules' | 'large granules' | 'crystals' | 'rock' | 'block' | 'cake' | 'paste' | 'liquid';

export interface SugarInfo{
  consistency : SugarConsistencyType;
}

export interface CaneInfo extends SugarInfo{
  type : CaneType;
}

export type SugarInfoTypeMap ={
  'cane' : CaneInfo;
  'coconut' : SugarInfo;
  'palm' : SugarInfo;
  'other' : SugarInfo;
}

export interface SugarProfile{
  type   : SugarType;
  info   : SugarInfoTypeMap[this['type']];
  source : string;
}





export interface GrainProfile{
  protein        : NutrientAmount;
  maxObsorption? : number;
}

export interface NutProfile{
  species : string;
  roasted : boolean;
  salted  : boolean;
}

export interface SeedProfile{
  species : string;
  // still figuring out other things to go here
}





export type DairyType = 'cow' | 'goat';

export type DairyForm = 'milk' | 'cream' | 'yogurt' | 'butter' | 'cheese';

export type MilkType = 'low fat' | 'skim' | '2%' | 'whole' | 'butter milk';

export type MilkState = 'powdered' | 'liquid' | 'condensed';

export type CreamType = 'half & half' | 'heavy cream' | 'sour cream';

export type CreamState = 'liquid' |  'whipped' | 'frozen';

export type YogurtType = 'plain' | 'flavored';

export type ButterType = 'unsalted' | 'salted';

export type CheeseTextureType = 'smooth/creamy' | 'smooth/chunky' | 'crumbly' | 'solid';

export type CheeseHydrationType = 'very wet' | 'wet' | 'damp' | 'dry' | 'very dry';

export type CheeseState = 'spreadable' | 'shredded' | 'crumbled' | 'block' | 'ball';

export interface MilkSpecs{
  type  : MilkType;
  state : MilkState;
}

export interface CreamSpecs{
  type  : CreamType;
  state : CreamState;
}

export interface YogurtSpecs{
  type    : YogurtType;
  flavor? : string;
}

export interface ButterSpecs{
  type : ButterType;
}

export interface CheeseSpecs{
  kind      : string;
  texture   : CheeseTextureType;
  hydration : CheeseHydrationType;
  state     : CheeseState;
}

export type DairySpecMapType = {
  'milk'   : MilkSpecs;
  'cream'  : CreamSpecs;
  'yogurt' : YogurtSpecs;
  'butter' : ButterSpecs;
  'cheese' : CheeseSpecs;
}

export interface DairyProfile{
  type        : DairyType;
  form        : DairyForm;
  specs       : DairySpecMapType[this['form']];
  pasturized  : boolean;
  homogenized : boolean;
}





export type ProduceType = 'fruit' | 'vegetable';

export type ProduceState = 'fresh' | 'frozen' | 'canned' | 'preserved' | 'pickled' | 'dried' | 'powdered';

export interface ProduceProfile{
  type  : ProduceType;
  state : ProduceState;
}





export type OilState = 'liquid' | 'solid';

export interface OilProfile{
  type  : string;
  state : OilState;
}





export type PlantPart = 'root' | 'stem' | 'leaf' | 'flower' | 'bark' | 'berry' | 'fruit' | 'seed';

export interface HerbProfile{
  species : string;
  part    : PlantPart | string;
}





export type ExtractType = 'water' | 'alcohol' | 'oil';

export type ExtractState = 'liquid' | 'paste';

export interface ExtractProfile{
  type  : ExtractType;
  state : ExtractState;
}





export type IngredientDataType = FlourProfile | SaltProfile | SugarProfile | GrainProfile | NutProfile | SeedProfile | DairyProfile |
                                 ProduceProfile | OilProfile | HerbProfile | ExtractProfile;

export interface IngredientProfile{
  name       : string;
  brand      : string;
  id         : string;
  photo?     : string;
  nutrition? : Nutrition;
  notes?     : IngredientNote[];
  data?      : IngredientDataType;
  locations  : IngredientCategory[];
}

export interface CategoryIndexItem{
  name: string;
  id: string;
  icon?: string;
  photo?: string;
}

export interface CategoryKey{
  name: string;
  id: string;
  removable: boolean;
  subCategories?: CategoryKey[];
  itemIds?: string[];
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