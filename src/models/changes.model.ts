import {MethodModel} from './swagger/method.model';
import {Definition} from '@angular/compiler-cli';

export class ChangesModel {
  removedMethods:Array<MethodModel>;
  addedMethods:Array<MethodModel>;
  removedTypes:Array<Definition>;
  addedTypes:Array<Definition>;
}
