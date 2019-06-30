import {Deserializable} from '../deserializable.model';

export class InfoModel implements Deserializable{
  title:string;
  description:string;
  version:string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

}
