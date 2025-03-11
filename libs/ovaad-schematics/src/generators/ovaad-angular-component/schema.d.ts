export type OvaadComponentType = 'standard' | 'custom form control'

export interface OvaadAngularComponentGeneratorSchema {

  name          : string;
  project       : string;
  location      : string;
  componentType : OvaadComponentType;
  
}
