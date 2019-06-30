import {InfoModel} from './info.model';
import {DefinitionModel} from './definition.model';
import {MethodsEnum} from './methods.enum';
import {MethodModel} from './method.model';
import {Deserializable} from '../deserializable.model';

export class SwaggerModel implements Deserializable{
  info:InfoModel;
  version:string;
  host:string;
  basePath:string;
  schemes:Array<string>;
  definitions:Map<string,DefinitionModel>;
  paths:Map<MethodsEnum,MethodModel>;
  extensions:Map<string,any>;

  constructor() {
    this.schemes = new Array<string>();
    this.definitions = new Map<string, DefinitionModel>();
    this.paths = new Map<MethodsEnum, MethodModel>();
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    this.info = new InfoModel().deserialize(input.info);
    Object.assign(this.schemes, input.schemes);
    Object.assign(this.definitions, input.definitions);
    Object.assign(this.paths, input.paths);
    return this;
  }

}
