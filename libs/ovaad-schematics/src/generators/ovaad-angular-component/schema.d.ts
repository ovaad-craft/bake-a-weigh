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

export interface InputDetailSchema {
  
  declarations      : InputPropDefinition[];
  bindings?         : string[];
  annotationImportPath? : string;
  
}



export interface ComponentInjectionPromptSchema {
  
  parentComponentClassName : string;
  templateInsertionPoint   : LineSelector;
  
}



export interface ParentComponentPrepSchema {
  
  parentComponentClassName : string;
  parentComponentFileName  : string;
  parentComponentPath      : string;
  childComponentClassName  : string;
  childComponentFileName   : string;
  childComponentPath : string;
  childComponentTag  : string;
  insertionPoint     : LineSelector;

}



export interface ParentComponentSchema {

  parentComponentClassName : string;
  parentComponentFileName  : string;
  childComponentClassName  : string;
  childComponentFileName   : string;
  childComponentPath : string;
  childTemplateTag   : string;
  insertionPoint     : LineSelector;
  bindings           : DataConfiguration[];
  
}

export interface AnnotationSpecs {
  path : string;
  items : string[];
}

export interface InputPropDefinition {
  name : string;
  type : string;
}

export interface ShapeInputResponse {

  annotations : AnnotationSpecs[];
  definitions : InputPropDefinition[];

}


export interface PromptSchema{

  name          : string;
  project       : string;
  location      : string;
  componentType : OvaadComponentType;
  inputSpecs?   : InputDetailSchema;
  customControlSpecs? : CustomFormControlSpecs;
  insertionSpecs? : ComponentInjectionPromptSchema;
  annotationSpecs? : AnnotationSpecs[];

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







export interface CustomFomrControlOptions {

  controlType    : string;
  typeAnnotation : string;
  annotationImportPath? : string;
  formArraySpecs? : Partial<FormArrayGroupSchema>;

}

export interface PromptOptions{

  name          : string;
  project       : string;
  location      : string;
  componentType : Partial<OvaadComponentType>;
  inputSpecs?   : Partial<InputDetailSchema>;
  customControlSpecs? : Partial<CustomFormControlOptions>;
  insertionSpecs? : Partial<ComponentInjectionPromptSchema>;
  annotationSpecs? : Partial<AnnotationSpecs[]>;
}
