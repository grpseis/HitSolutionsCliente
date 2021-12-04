import { Component, OnInit } from '@angular/core';
import {Platos} from "../../models/Platos";
import {PlatoServiceService} from "../../services/plato-service.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-listar-plato',
  templateUrl: './listar-plato.component.html',
  styleUrls: ['./listar-plato.component.css']
})
export class ListarPlatoComponent implements OnInit {
  listPlatos: Platos[] = [];
  constructor(private _platoService: PlatoServiceService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerPlatos();
  }
  obtenerPlatos() {
    this._platoService.getPlatos().subscribe(data =>{
      console.log(data);
      this.listPlatos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarPlato(id: any) {
    this._platoService.eliminarPlato(id).subscribe(data => {
      this.toastr.error('El plato se ha eliminado con exito', 'Plato eliminado');
      this.obtenerPlatos();
    } , error => {
      console.log(error);
    })
  }

}
