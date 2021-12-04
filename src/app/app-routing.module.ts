import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarPlatoComponent} from "./components/listar-plato/listar-plato.component";
import {CrearPlatoComponent} from "./components/crear-plato/crear-plato.component";

const routes: Routes = [
  {path: 'listar-plato', component: ListarPlatoComponent},
  {path: 'crear-plato', component: CrearPlatoComponent},
  {path: 'editar-plato/:id', component: CrearPlatoComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
