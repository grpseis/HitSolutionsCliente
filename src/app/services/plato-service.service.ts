import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Platos} from "../models/Platos";

@Injectable({
  providedIn: 'root'
})
export class PlatoServiceService {
  //url = 'http://localhost:3000/api/plato/';
  url = 'https://hitsolutions.herokuapp.com/api/plato';

  constructor(private http: HttpClient) { }

  //listado de platos
  getPlatos(): Observable<any> {
    return this.http.get(this.url);
  }

  // eliminar un plato
  eliminarPlato(id: String): Observable<any> {
    return this.http.delete(this.url + id);
  }

  // guardar plato
  guardarPlato(plato: Platos): Observable<any> {
    return this.http.post(this.url, plato);
  }

  // actualizar un plato
  obtenerPlato(id: String): Observable<any> {
    return this.http.get(this.url + id);
  }
  editarPlato(id: string, plato: Platos): Observable<any> {
    return this.http.put(this.url + id, plato)
  }
}
