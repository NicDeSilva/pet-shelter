import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  getAllPets = () => {
    let tempObservable = this._httpService.getAllPets();
    tempObservable.subscribe( data => this.pets = data);
  }

  clickEdit = (id) => {
    this._router.navigate([`/edit/${id}`]);
  }

  clickDetails = (id) => {
    this._router.navigate([`/info/${id}`]);
  }

  ngOnInit() {
    this.getAllPets();
  }

}
