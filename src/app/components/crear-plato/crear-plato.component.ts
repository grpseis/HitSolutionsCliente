import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PlatoServiceService} from "../../services/plato-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Platos} from "../../models/Platos";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-crear-plato',
  templateUrl: './crear-plato.component.html',
  styleUrls: ['./crear-plato.component.css']
})
export class CrearPlatoComponent implements OnInit {
  platoForm: FormGroup;
  titulo = 'Crear Plato';
  id: string | null;

  constructor(private fb: FormBuilder,
              private prouter: Router,
              private _platoService: PlatoServiceService,
              private toastr: ToastrService,
              private aRouter: ActivatedRoute) {
    this.platoForm = this.fb.group({
      name: ['',Validators.required],
      principal: ['',Validators.required],
      farinacea: ['',Validators.required],
      tuberculos: ['',Validators.required],
      verdura: ['',Validators.required],
      precio: ['',Validators.required]
    })
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarplato(){
    console.log(this.platoForm)

    console.log(this.platoForm.get('plato')?.value);

    const PLATO: Platos = {
      name: this.platoForm.get('name')?.value,
      principal: this.platoForm.get('principal')?.value,
      farinacea: this.platoForm.get('farinacea')?.value,
      tuberculos: this.platoForm.get('tuberculos')?.value,
      verdura: this.platoForm.get('verdura')?.value,
      precio: this.platoForm.get('precio')?.value
    }

    if(this.id !== null){

      //editamos plato
      this._platoService.editarPlato(this.id, PLATO).subscribe(data => {
        this.toastr.info('Plato actualizado con exito', 'Actualizar Plato');
        this.prouter.navigate(['/listar-plato']);
      }, error => {
        console.log(error);
        this.platoForm.reset();
      })

    } else {

      //agregamos plato
      console.log(PLATO);
      this._platoService.guardarPlato(PLATO).subscribe(data => {
        this.toastr.success('Plato Registrado con exito', 'Plato Registrado');
        this.prouter.navigate(['/listar-plato']);
      }, error => {
        console.log(error);
        this.platoForm.reset();
      })
    }


  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar plato';
      this._platoService.obtenerPlato(this.id).subscribe(data => {
        this.platoForm.setValue({
          name: data.name,
          principal: data.principal,
          farinacea: data.farinacea,
          tuberculos: data.tuberculos,
          verdura: data.verdura,
          precio: data.precio
        })
      })
    }
  }
}
