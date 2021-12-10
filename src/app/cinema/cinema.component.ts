import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import { CinemaService} from "../cinema-service.service";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  private cinemaData$: Observable<[]>;


  constructor() {

  }

  ngOnInit(): void {
  }

}
