import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-finnkino',
  templateUrl: './finnkino.component.html',
  styleUrls: ['./finnkino.component.css']
})
export class FinnkinoComponent implements OnInit {
  public cinemaData: Observable<any>;

  constructor(private moviesService: MoviesService) {
    this.cinemaData = this.moviesService.getData();
  }




  ngOnInit(): void {
  }

}
