import {MethodModel} from './swagger/method.model';
import {DefinitionModel} from './swagger/definition.model';
import {MethodChangeModel} from './methodChange.model';
import {DefinitionChangeModel} from './definitionChange.model';

export class ChangesModel {
  removedMethods:Map<string,MethodModel>;
  addedMethods:Map<string,MethodModel>;
  changedMethods:Map<string,MethodChangeModel>;
  removedTypes:Map<string,DefinitionModel>;
  addedTypes:Map<string,DefinitionModel>;
  changedTypes:Map<string,DefinitionChangeModel>;
}
