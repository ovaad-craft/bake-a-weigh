export type OvaadComponentType = 'standard' | 'custom form control';

export type OvaadFormControlType = 'FormGroup' | 'FormControl' | 'FormArrayGroup';

export interface FormArrayGroupSchema {

  propertyName           : string;
  controlType            : OvaadFormControlType;
  controlTypeAnnotation  : string;
  annotationImportPath?  : string;

}

export interface CustomFormControlSpecs{

  controlType    : string;
  typeAnnotation : string;
  annotationImportPath? : string;
  formArraySpecs? : FormArrayGroupSchema;

}

export interface LineSelector {

  start : number;
  end?  : number;

}

export interface DataConfiguration{

  propToPassIn : string;
  InputForProp : string;

}




export interface ComponentInjectionSpecs{
  
  parentComponentFileName : string;
  parentComponentClassName : string;
  childComponentFileName : string;
  childComponentClassName : string;
  templateItem       : string;
  removeCode?        : LineSelector;
  insertAt?          : number;
  dataSetup?         : DataConfiguration[];
  childComponentPath      : string;
  
}

export interface InputDetailsSchema {
  
  declarations      : string[];
  bindings?         : string[];
  ImportPath?       : string;
  
}



export interface ComponentInjectionPromptSchema {
  
  parentComponentClassName : string;
  templateInsertionPoint   : LineSelector;
  
}


export interface PromptSchema{

  name          : string;
  project       : string;
  location      : string;
  componentType : string;
  inputSpecs?   : InputDetailsSchema;
  customControlSpecs? : CustomFormControlSpecs;
  insertionSpecs? : ComponentInjectionPromptSchema;

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
  connectInputs?        : string[];
}

export interface ParsedComponentFile {
  sourceFile: ts.SourceFile,
  classNode: ts.ClassDeclaration | undefined,
  decoratorNode: ts.Decorator | undefined
}
