import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CISL Swagger Buddy v0.1';
  swaggerFile1: File = null;
  swaggerFile2: File = null;
  swagger1JSON:string;
  swagger2JSON:string;

  constructor() {
  }

  public async readSwaggers() {
    let swag = await this.readFileAsync(this.swaggerFile1);
    this.swagger1JSON = swag.toString();
    swag = await this.readFileAsync(this.swaggerFile2);
    this.swagger2JSON = swag.toString();
    this.compareSwaggers();

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

  compareSwaggers() {
    if (this.swagger1JSON===undefined || this.swagger2JSON===undefined ||  this.swagger1JSON===null || this.swagger1JSON.length===0 || this.swagger2JSON===null || this.swagger2JSON.length===0)
      return;

    let removedPaths:Array<string> = [];
    let addedPaths:Array<string> = [];

    let swagger1 = JSON.parse(this.swagger1JSON);
    let swagger2 = JSON.parse(this.swagger2JSON);
    console.log(swagger1);
    console.log(swagger2);

    //DO FOR METHODS

    for (let path in swagger1.paths) {
      if (swagger2.paths[path]===undefined) {
        removedPaths.push(path);
        console.log('removedPath '+path);
      } else {
        //check modification
      }
    }

    for (let path in swagger2.paths) {
      if (swagger1.paths[path]===undefined) {
        addedPaths.push(swagger2.paths[path]);
        console.log('addedPaths '+path);
      }
    }

    console.log(addedPaths);

  }
}
