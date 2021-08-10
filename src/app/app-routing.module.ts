import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//-------------------------------------------------------------------------------
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { TiendaComponent } from './pages/tienda/tienda.component';

const routes: Routes = [
  { path: '', component:InicioComponent },
  { path: 'contacto', component:ContactoComponent },
  { path: 'nosotros', component:NosotrosComponent },
  { path: 'tienda', component:TiendaComponent }
];
// ---------------------------------NO TOQUE ↓------------------------------------
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
