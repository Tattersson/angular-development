import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { CinemaServiceService } from '../cinema-service.service';
import { SearchPipe } from '../pipes/search.pipe';




@Component({
  selector: 'app-open-api-demo',
  templateUrl: './open-api-demo.component.html',
  styleUrls: ['./open-api-demo.component.css']
})
export class OpenApiDemoComponent implements OnInit {

  title = 'angular-text-search-highlight';
  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman',

  ]

  constructor(private cinemaService: CinemaServiceService) {
   
   }
  public cinemaData!: Observable<any>;

  ngOnInit(): void {
    this.cinemaData = this.cinemaService.getData();
    
    console.log(this.cinemaData);
  }


  


}
