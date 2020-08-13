import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CollectivitesSharedModule } from "../../projects/collectivites/src/app/app.module"
import { EntreprisesSharedModule } from "../../projects/entreprises/src/app/app.module";
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { MyLibraryModule } from '../../projects/my-library/src/lib/my-library.module';


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
    SharedModule,
    MyLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents:[Comp1Component]
})
export class AppModule { }

