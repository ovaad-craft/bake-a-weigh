export type OvaadComponentType = 'standard' | 'custom form control';

export type OvaadFormControlType = 'FormGroup' | 'FormControl';

export interface CustomFormControlSpecs{
  controlType    : string;
  typeAnnotation : string;
  listPropertyName?  : string;
}

export interface OvaadAngularComponentGeneratorSchema {

  name          : string;
  project       : string;
  location      : string;
  componentType : string;
  controlInfo?  : CustomFormControlSpecs;
  
}
