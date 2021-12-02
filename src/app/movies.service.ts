import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  url = 'https://www.finnkino.fi/xml/News';

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<any> {
    let params = new HttpParams().set('area', '1041').set('categoryID', '1041');

    return this.httpClient
      .get(this.url, { responseType: 'text', params: params })
      .pipe(
        map((response) => {
          console.log('getXMLData... ' + response);

          let newsData = [];
          // tässä muunnetaan xml-data json muotoon
          parseString(
            response,
            { trim: true, explicitArray: false, mergeAttrs: true },
            function (err, result) {
              console.log(
                'getJsonData......' + JSON.stringify(result.News.NewsArticle)
              );
              newsData = result.News.NewsArticle;
            }
          );

          this.newsCount = newsData.length;

          return newsData;
        })
      );
  }
}
