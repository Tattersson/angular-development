import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CinemaServiceService {
  url = "https://www.finnkino.fi/xml/News/"

  constructor(private httpClient: HttpClient ) {
    
   }


  getData(): Observable<any> {
    
    return this.httpClient.get(this.url, {responseType: 'text'}).pipe(map(response => {
      console.log('getXMLData...' + response);
      let newsData= [];
      
      //Muunnetaan XML -data JSON muotoon.

      newsData = require('xml2js').parseString;
      var xml = "<root>Hello xml2js!</root>"
      newsData(xml, function ( _err: any, result: any)
      {
        
        console.log('done');
        JSON.stringify(result);
        console.dir(result);

      });

      return Array.from(newsData);
      
    }))

  }
}

