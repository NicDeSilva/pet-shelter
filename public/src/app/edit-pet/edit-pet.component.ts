import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router} from '@angular/router';
import { getNodeInjectable } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  id:any = '';
  edits:any = {
    name:'',
    decsription:'',
    type: '',
    skill1: '',
    skill2: '',
    skill3: ''};

  errors: any;
  oldName:any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getOnePetByName = () => {
    this.edits.name = this.capitalizeFirstLetter(this.edits.name);
    this.edits.type = this.capitalizeFirstLetter(this.edits.type);

    if (this.edits.name != ""){
      let tempObservable = this._httpService.getOnePetByName(this.edits.name);
      tempObservable.subscribe( data => {
        console.log("NAME MATCHES",data);
        if(!data || data['name'] == this.oldName) {
            this.updatePet();
        }
        else{
          this.errors= {};
          this.errors.unique = "This name already exists!";
        }
      })
    }
    else{
      this.updatePet();
    }
  }

  updatePet = () => {
    this.edits.name = this.capitalizeFirstLetter(this.edits.name);
    this.edits.type = this.capitalizeFirstLetter(this.edits.type);

    let tempObservable2 = this._httpService.updatePet(this.id,this.edits);
    tempObservable2.subscribe(data => {
    if (data['errors']){
    console.log(data['errors'])
    this.errors = data['errors'];
    console.log(this.errors);
    console.log(this.errors.name.message)
    } else {
      console.log(data);
      this._router.navigate(['/info', this.id]);
    }
    });
}
  



  getOnePet = (id) => {
    let tempObservable = this._httpService.getOnePet(id);
    tempObservable.subscribe( data => {
      this.edits = data;
      this.oldName = this.edits.name;
      console.log("OLD NAME", this.oldName);
    });
  }


  ngOnInit() {
    this._route.params.subscribe( (params) => {
      this.id = params['id'];
      this.getOnePet(this.id);
    });

  }

}
