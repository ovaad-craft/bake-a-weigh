export type OvaadComponentType = 'standard' | 'custom form control';

export type OvaadFormControlType = 'FormGroup' | 'FormControl' | 'FormArrayGroup';

export interface CustomFormControlSpecs{
  controlType    : string;
  typeAnnotation : string;
  hasGlobalTypePath? : string;
  globalTypePath? : string;
  listPropertyName?  : string;
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
  //controlInfo?  : CustomFormControlSpecs;  
}
