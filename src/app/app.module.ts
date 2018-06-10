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
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

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
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC23O6pIlVG_dNPSMM5qQ-af4yLAUExauM",
      authDomain: "sciammarella-dolci-torte.firebaseapp.com",
    databaseURL: "https://sciammarella-dolci-torte.firebaseio.com",
    projectId: "sciammarella-dolci-torte",
    storageBucket: "sciammarella-dolci-torte.appspot.com",
    messagingSenderId: "974178849528"
    }),                                       
    AngularFireDatabaseModule,
    AngularFireAuthModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
