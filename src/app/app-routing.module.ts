import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { PedidoComponent } from './pages/pedido/pedido.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: AboutComponent},
  {path: 'orcamento', component: OrcamentoComponent},
  {path: 'pedido', component: PedidoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, {useHash: true})]
})

export class AppRoutingModule { }
