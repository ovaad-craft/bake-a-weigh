export type OvaadComponentType = 'standard' | 'custom form control';

export type OvaadFormControlType = 'FormGroup' | 'FormControl' | 'FormArrayGroup';

export interface CustomFormControlSpecs{

  controlType    : string;
  typeAnnotation : string;
  hasGlobalTypePath? : string;
  globalTypePath?    : string;
  listPropertyName?  : string;
  listPropertyType?  : string;

}

export interface LineSelector {

  start : number;
  end   : number;

}

export interface DataConfiguration{

  propToPassIn : string;
  InputForProp : string;

}

export interface ComponentInjectionSpecs{

  componentClassName : string;
  templateItem       : string;
  removeCode?        : LineSelector;
  insertAt           : number;
  dataSetup?         : DataConfiguration[];

}

export interface OvaadAngularComponentGeneratorSchema {

  name            : string;
  project         : string;
  location        : string;
  componentType   : string;
  controlType?    : string;
  typeAnnotation? : string;
  hasGlobalTypePath?    : string;
  globalTypePath?       : string;
  listPropertyName?     : string;
  listItemType?         : string;
  listItemAnnotation?   : string;
  isListItemTypeGlobal? : string;
  listItemTypeImport?   : string;
  insertInto?           : ComponentInjectionSpecs;
  addInputs?            : string[];
}
