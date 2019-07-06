import { Injectable } from '@angular/core';
import {SwaggerModel} from '../models/swagger/swagger.model';
import {ChangesModel} from '../models/changes.model';

@Injectable({
  providedIn: 'root'
})
export class SwaggerServiceService {

  constructor() { }

  compareSwaggers(swagger1JSON:string,swagger2JSON:string) :ChangesModel {
    if (swagger1JSON===undefined || swagger2JSON===undefined ||  swagger1JSON===null || swagger1JSON.length===0 || swagger2JSON===null || swagger2JSON.length===0)
      return null;

    const changes:ChangesModel = new ChangesModel();

    const swagger1 = JSON.parse(swagger1JSON);
    const swagger2 = JSON.parse(swagger2JSON);
    console.log(swagger1,swagger2);

    return changes;
  }
}
