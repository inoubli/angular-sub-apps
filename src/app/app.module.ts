import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CollectivitesSharedModule } from "../../projects/collectivites/src/app/app.module"
import { EntreprisesSharedModule } from "../../projects/entreprises/src/app/app.module";
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollectivitesSharedModule.forRoot(),
    EntreprisesSharedModule.forRoot(),
    CollectivitesSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

