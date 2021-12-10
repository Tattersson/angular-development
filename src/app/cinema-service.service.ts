import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import { parseString } from "xml2js"



@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  apiCall = "https://www.finnkino.fi/xml/News/";
  areaID = "1019";
  url: string


  constructor( private httpClient: HttpClient) {
  this.url = this.apiCall
  }

  getData(): Observable<any>{
    let parameters = new HttpParams().set("Area",this.areaID);

    return this.httpClient.get(this.url, {responseType: "text", params: parameters}).pipe(
      map(response => {

        let newsData: any[] = [];



              //Parse XML 2 Json
          parseString(response,
              {trim:true,
              //explicitArray:false,
              //mergeAttrs:true
              }, function (err, result) {

              console.log('getJsonData.....' + JSON.stringify(result.News.NewsArticle));
              newsData = result.News.NewsArticle;
            });


        return newsData;

      }));




  }
}
