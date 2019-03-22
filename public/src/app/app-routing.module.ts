import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPetComponent } from './add-pet/add-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { HomeComponent } from './home/home.component';
import { PetInfoComponent } from './pet-info/pet-info.component';

const routes: Routes = [
  { path: 'new', component: AddPetComponent },
  { path: 'edit/:id', component: EditPetComponent },
  { path: 'info/:id', component: PetInfoComponent},
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
