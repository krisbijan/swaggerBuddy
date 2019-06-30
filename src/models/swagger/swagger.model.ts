import {InfoModel} from './info.model';
import {DefinitionModel} from './definition.model';
import {MethodsEnum} from './methods.enum';
import {MethodModel} from './method.model';

export class SwaggerModel {
  info:InfoModel;
  version:string;
  host:string;
  basePath:string;
  schemes:Array<string>;
  definitions:Map<string,DefinitionModel>;
  paths:Map<MethodsEnum,MethodModel>;
  extensions:Map<string,any>;


  constructor(swaggerJSON:string) {}


}
