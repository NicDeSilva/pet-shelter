import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllPets() {
    return this._http.get('/api/pets')
  }

  getOnePet(id) {
    return this._http.get(`/api/pets/${id}`)
  }

  updatePet(id, data) {
    return this._http.put(`/api/pets/${id}`, data)
  }

  createPet(data) {
    return this._http.post('/api/pets', data)
  }

  deletePet(id) {
    return this._http.delete(`/api/pets/${id}`)
  }

  likePet(id) {
    return this._http.patch(`/api/pets/${id}`, null)
  }

  getOnePetByName(name) {
    return this._http.get((`/api/pets/name/${name}`))
  }
}
