import { Component } from '@angular/core';
import {SwaggerServiceService} from '../swagger-service.service';

@Component({
  selector: 'app-swagger-diff',
  templateUrl: './swagger-diff.component.html',
  styleUrls: ['./swagger-diff.component.css']
})
export class SwaggerDiffComponent {

  swaggerFile1: File = null;
  swaggerFile2: File = null;
  swagger1JSON:string;
  swagger2JSON:string;

  constructor(private swaggerService:SwaggerServiceService) {
  }

  public async readSwaggers() {
    let swag = await this.readFileAsync(this.swaggerFile1);
    this.swagger1JSON = swag.toString();
    swag = await this.readFileAsync(this.swaggerFile2);
    this.swagger2JSON = swag.toString();
    this.swaggerService.compareSwaggers(this.swagger1JSON,this.swagger2JSON);

  }

  fileChange(swaggerNo: number, files: FileList) {
    if (swaggerNo===1) {
      this.swaggerFile1 = files.item(0);
    } else if (swaggerNo===2) {
      this.swaggerFile2 = files.item(0);
    }
  }

  readFileAsync(file:File) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result.toString());
      };
      reader.onerror = reject;
      reader.readAsText(file);
    })
  }


}
