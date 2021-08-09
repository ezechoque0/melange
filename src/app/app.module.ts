import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FootComponent } from './components/foot/foot.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './components/cart/cart.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FootComponent,
    CardComponent,
    CartComponent,
    InicioComponent,
    TiendaComponent,
    NosotrosComponent,
    ContactoComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
