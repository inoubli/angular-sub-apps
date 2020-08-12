import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { SharedModule } from './../../../../src/app/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class EntreprisesSharedModule{
  static forRoot(): ModuleWithProviders<EntreprisesSharedModule> {
    const providers = []
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}
