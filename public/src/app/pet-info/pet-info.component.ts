import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {
  id:any = '';
  info:any= {
    name:'',
    decsription:'',
    type: '',
    skill1: '',
    skill2: '',
    skill3: '',
    likes: ''};
  likeClicked:boolean = false;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }


  getOnePet = (id) => {
    let tempObservable = this._httpService.getOnePet(id);
    tempObservable.subscribe( data => {this.info = data;});
  }

  like = () => {
    if (this.likeClicked == false){
      this.likeClicked = true;
      let tempObservable = this._httpService.likePet(this.id);
      tempObservable.subscribe( data => {
      console.log(data);
      this.getOnePet(this.id);
    });
    }
  }

  deletePet = () => {
    let tempObservable = this._httpService.deletePet(this.id);
    tempObservable.subscribe(data => {
      this._router.navigate(['/home'])});
  }

  ngOnInit() {
    this._route.params.subscribe( (params) => {
      this.id = params['id'];
      this.getOnePet(this.id);
    });
  }

}
