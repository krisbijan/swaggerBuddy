import {Deserializable} from '../deserializable.model';

export class DefinitionModel   implements Deserializable{

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

}
