import {Deserializable} from '../deserializable.model';

export class MethodModel implements Deserializable{

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

}
