import {Deserializable} from '../deserializable.model';

export class FieldModel implements Deserializable{

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

}
