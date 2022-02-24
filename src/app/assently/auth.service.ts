import { Injectable } from '@angular/core';
import { BrowserModule} from "@angular/platform-browser";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { Observable} from "rxjs";
import { map } from "rxjs";
import { Config} from "./config";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "https://test.assently.com/api/v2/findcases";
  auth = "Basic ZGNlZTBlNDctOTg4MC00NDgzLWIxNzktNjI3MmZmZTk2ZjkzOnlRNGoxTG1hMlFqd1g0TXFyTDVFMjhmTEttRndkTjlkR0dub0NyVjA=";
  users: any;

  constructor( private httpClient: HttpClient) {


  }
  getData(): Observable<any>{
    let headers = new  HttpHeaders().set('Authorization', this.auth);
    let params = new HttpParams().set('Status', 'Finished');

    return this.httpClient.get<Config[]>(this.url, {headers, params }).pipe( map(response => {
      console.warn('GetJSONData....' + response);
      let jsonData: any[] = []

      return jsonData;
    }));
  }

}
