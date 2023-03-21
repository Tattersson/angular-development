import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {  Observable } from 'rxjs';
import { CinemaServiceService } from '../cinema-service.service';
import { SearchPipe } from '../pipes/search.pipe';





@Component({
  selector: 'app-open-api-demo',
  templateUrl: './open-api-demo.component.html',
  styleUrls: ['./open-api-demo.component.css']
})
export class OpenApiDemoComponent implements OnInit {

  searchText: string = '';  //Declare variable for search text

  constructor(private cinemaService: CinemaServiceService) {
   
   }
  public cinemaData!: Observable<any>;

  ngOnInit(): void {
    this.cinemaData = this.cinemaService.getData(); //Get data from service.
    

    
    //console.log(this.cinemaData); 
  }




  //This function only replaces the text in the search field.
  clearFilter(){
    this.searchText = '';
  }
}
