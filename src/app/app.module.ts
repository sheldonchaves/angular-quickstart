import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
import { CriarPedidoComponent } from './components/criar-pedido/criar-pedido.component';
import { HomeComponent } from './components/home/home.component';
import { NoContentComponent } from './components/no-content/no-content.component';

@NgModule({
    declarations: [
        AppComponent,
        ListaPedidosComponent,
        CriarPedidoComponent,
        HomeComponent,
        NoContentComponent
    ],
    imports: [
        RouterModule.forRoot(ROUTES, {
            useHash: Boolean(history.pushState) === false,
            preloadingStrategy: PreloadAllModules
        }),
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
