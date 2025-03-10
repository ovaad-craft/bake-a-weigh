/*export function siteTypes(): string {
  return 'site-types';
}*/

export type WeightType = 'mcg' | 'mg' | 'g' | 'ml';
export interface IngredientNote{
  title       : string;
  description : string;
}


export interface ElementWeightType{
  amount : number;
  weightType: WeightType;
  percentage? : number;
}


export interface Nutrient extends ElementWeightType{
  name : string;
}

export interface NutrientCategory{
  name?       : string;
  totalAmount : ElementWeightType;
  nutrients?  : NutrientCategory[];
}

export type NutritionOptionType = 'totalFat' | 'cholesterol' | 'sodium' | 'totalCarbohydrates' |
                                  'protein';

export interface Nutrition{
  servingSize         : ElementWeightType;
  calories            : number;
  totalFat?           : NutrientCategory;
  cholesterol?        : NutrientCategory;
  sodium?             : NutrientCategory;
  totalCarbohydrates? : NutrientCategory;
  protein?            : NutrientCategory;
  vitaminsAndMinerals?: Nutrient[];
  ingredients : string[];
}

export interface WeightMeasurement{
  amount : number;
  weightType : WeightType;
}

export interface NutrientTracker{
  name? : string;
  servingSize : WeightMeasurement;
  amount : WeightMeasurement;
}

export interface NutrientAmount{
  servingSize : number;
  servingSizeWeight : WeightType;
  amount      : number;
  amountWeightType : WeightType;
}

export interface IngredientCategory{
  name         : string;
  subCategory? : IngredientCategory;
}





export type FlourType = 'wheat' | 'whole wheat' | 'rice' | 'rye' | 'barley' | 'spelt' | 'buckwheat' | 'other'; //there's more but I'm still compiling the list.

export type FlourClassification = 'cake' | 'pastry' | 'all purpose' | 'bread' | '0' | '00' | '000' | '0000' | 'other';

export interface FlourProfile{
  type           : FlourType;
  classification : FlourClassification;
  maxHydration?  : number;
  protein?       : NutrientTracker;
  bleached       : boolean;
}



export type SaltType = 'table salt' | 'sea salt' | 'kosher salt' | 'other';

export type SaltConsistency = 'extra fine' | 'fine' | 'coarse' | 'fine crystal' | 'crystal' | 'other';

export interface SaltProfile{
  type        : SaltType;
  consistency : SaltConsistency;
  sodium?     : NutrientTracker;
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
  protein?       : NutrientTracker;
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

export type CheeseState = 'spreadable' | 'shredded' | 'crumbled' | 'block' | 'ball' | 'sliced';

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

export type DairySpecType =
  MilkSpecs   |
  CreamSpecs  |
  YogurtSpecs |
  ButterSpecs |
  CheeseSpecs;

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





export type PlantPart = 'root' | 'stem' | 'leaf' | 'flower' | 'bark' | 'berry' | 'fruit' | 'seed' | 'other';

export interface HerbProfile{
  species : string;
  part    : PlantPart;
  // todo : create a herb state type
}





export type SweetenerFormType = 'liquid' | 'powder' | 'crystal' | 'block' | 'paste';

export interface SweetenerProfile{
  type : string;
  form : SweetenerFormType;
}




export type ExtractType = 'water' | 'alcohol' | 'oil';

export type ExtractState = 'liquid' | 'paste';

export interface ExtractProfile{
  type  : ExtractType;
  state : ExtractState;
}





export type IngredientDataType = FlourProfile | SaltProfile | SugarProfile | GrainProfile | NutProfile | SeedProfile | DairyProfile |
                                 ProduceProfile | OilProfile | HerbProfile | ExtractProfile | SweetenerProfile;



export type IngredientProfileType = 'flour' | 'salt' | 'sugar' | 'grain' | 'nut' | 'seed' | 'dairy' | 'produce' | 'oil' | 'herb' | 'extract' | 'sweetener' | 'custom';



// todo -- create a profile for powders                                
export interface IngredientProfile {
  name       : string;
  brand      : string;
  id         : string;
  photo?     : string;
  icon?      : string;
  nutrition? : Nutrition;
  notes?     : IngredientNote[];
  profileType? : IngredientProfileType;
  data?      : IngredientDataType;
  //locations  : IngredientCategory[];
  locations  : string[];
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
  photo? : string;
  icon? : string;
  removable: boolean;
  subCategories?: CategoryKey[];
  itemIds?: string[];
  hidden?: boolean;
}

export interface CategoryIndex extends CategoryIndexItem{
  items?: CategoryIndexItem[];
  subCategories?: CategoryIndex[];
}

export type CategoryResponseType = 'category' | 'item' | 'new';
export interface CategoryResponse{
  categoryPath : number[];
  itemIndex? : number;
  ingredientId? : string;
  categoryId? : string;
  responseType : CategoryResponseType;
}