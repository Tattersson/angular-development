import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { CinemaServiceService } from '../cinema-service.service';




@Component({
  selector: 'app-open-api-demo',
  templateUrl: './open-api-demo.component.html',
  styleUrls: ['./open-api-demo.component.css']
})
export class OpenApiDemoComponent implements OnInit {


  constructor(private cinemaService: CinemaServiceService) {
   
   }
  public cinemaData!: Observable<any>;

  ngOnInit(): void {
    this.cinemaData = this.cinemaService.getData();
    
    console.log(this.cinemaData);
  }


  


}
