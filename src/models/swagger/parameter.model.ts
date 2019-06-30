import {Deserializable} from '../deserializable.model';

export class ParameterModel implements Deserializable{

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

}
