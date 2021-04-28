import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListViewComponent } from './list-view/list-view.component';
import { CardViewComponent } from './card-view/card-view.component';
import { CreateClientComponent } from './create-client/create-client.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListViewComponent,
    CardViewComponent,
    CreateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
