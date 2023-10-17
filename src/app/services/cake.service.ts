import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable()
export class CakeService {

  constructor(private http: HttpClient) { }

  private extractData(body:any){
    let data = body;
    return data || [] || {};
  }

  public getCakes(){
    return this.http.get("http://localhost:3000/api/v1/cake/catalog")
    .pipe(map(this.extractData))
  }
}
