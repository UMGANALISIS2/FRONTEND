import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable()
export class CakeService {

  headers = new HttpHeaders().append('Access-Control-Allow-Origin', '*')
  constructor(private http: HttpClient) { }

  private extractData(body:any){
    let data = body;
    return data || [] || {};
  }

  public getCakes(){
    return this.http.get("https://localhost:7147/cakes/catalog", {
      headers: this.headers
    })
    .pipe(map(this.extractData))
  }
}
