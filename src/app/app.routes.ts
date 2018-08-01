import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CriarPedidoComponent } from './components/criar-pedido/criar-pedido.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
import { NoContentComponent } from './components/no-content/no-content.component';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'criar', component: CriarPedidoComponent },
  { path: 'listar', component: ListaPedidosComponent },
  { path: '**',    component: NoContentComponent }
];