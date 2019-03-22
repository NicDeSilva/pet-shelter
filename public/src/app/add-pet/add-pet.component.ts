import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  newPet: any = {
    likes: 0,
    name:'',
    decsription:'',
    type: '',
    skill1: '',
    skill2: '',
    skill3: '',};

  errors:any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getOnePetByName = () => {
    this.newPet.name = this.capitalizeFirstLetter(this.newPet.name);
    this.newPet.type = this.capitalizeFirstLetter(this.newPet.type);

    if (this.newPet.name != ""){
      let tempObservable = this._httpService.getOnePetByName(this.newPet.name);
      tempObservable.subscribe( data => {
        console.log("NAME MATCHES",data);
        if(!data) {
            this.createPet();
        }
        else{
          this.errors= {};
          this.errors.unique = "This name already exists!";
        }
      })
    }
    else{
      this.createPet();
    }
  }

  createPet = () => {
    let tempObsevable2 = this._httpService.createPet(this.newPet);
    tempObsevable2.subscribe( data => 
      {
        if (data['errors']){
          console.log(data['errors'])
          this.errors = data['errors'];
          console.log(this.errors);
        } else {
          console.log(data);
          this._router.navigate(['/home']);
        }
      });
  }

  ngOnInit() {
  }

}
