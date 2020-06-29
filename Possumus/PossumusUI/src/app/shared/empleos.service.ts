import { Injectable } from '@angular/core';
import { Candidato } from './candidato.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  formData: Candidato;
  readonly rootURL = 'http://localhost:53755/api';
  list : Candidato[];

  constructor(private http: HttpClient) { }

  postCandidato() {
    debugger;
    return this.http.post(this.rootURL + '/Candidato', this.formData);
  }
  putCandidato() {
    return this.http.put(this.rootURL + '/Candidato/'+ this.formData.CandidatoId, this.formData);
  }
  deleteCandidato(id) {
    return this.http.delete(this.rootURL + '/Candidato/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Candidato')
    .toPromise()
    .then(res => this.list = res as Candidato[]);
  }

}
