import { Component, OnInit } from '@angular/core';
import { AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Config } from "./config";


@Component({
  selector: 'app-assently',
  templateUrl: './assently.component.html',
  styleUrls: ['./assently.component.css']
})
export class AssentlyComponent implements OnInit {

  jsonData : Observable<Config[]>;


  constructor(auth:AuthService) {

    this.jsonData = auth.getData()
  }

  ngOnInit(): void {
  }

}
