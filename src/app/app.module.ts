import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TabBarComponent,
    HomeComponent,
    AboutComponent,
    CatalogoComponent,
    OrcamentoComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/OneSignalSDKWorker.js', { enabled: environment.production }),
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
