export type OvaadComponentType = 'standard' | 'custom form control';

export type OvaadFormControlType = 'FormGroup' | 'FormControl' | 'FormArrayGroup';

export interface CustomFormControlSpecs{
  controlType    : string;
  typeAnnotation : string;
  hasGlobalTypePath? : string;
  globalTypePath? : string;
  listPropertyName?  : string;
  listPropertyType?  : string;
}

export interface OvaadAngularComponentGeneratorSchema {

  name          : string;
  project       : string;
  location      : string;
  componentType : string;
  controlType?    : string;
  typeAnnotation? : string;
  hasGlobalTypePath? : string;
  globalTypePath? : string;
  listPropertyName?  : string;
  listItemType? : string;
  listItemAnnotation? : string;
  isListItemTypeGlobal? : string;
  listItemTypeImport? : string;  
}
