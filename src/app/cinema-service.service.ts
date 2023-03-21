import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

const xml2js = require('xml2js')

@Injectable({
  providedIn: 'root'
})
export class CinemaServiceService {
  url = "https://www.finnkino.fi/xml/News/"
 
  constructor(private httpClient: HttpClient ) {
    
   }


  getData(): Observable<any> {
    
    return this.httpClient.get(this.url, {responseType: 'text'}).pipe(map(response => {
      //console.log('getXMLData...' + response);
      let newsData= {};
      
      //Muunnetaan XML -data JSON muotoon.
    
      xml2js.parseString(response, {explicitArray: false, ignoreAttrs: true }, (err: any , result: any) => {

        if (err){
          throw err;
        }
        newsData = JSON.stringify(result.News.NewsArticle, null, 4)
        //console.warn(newsData);
        newsData = result.News.NewsArticle;
      })
      console.warn(newsData);

      return newsData;

    }))

  }
}

