import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ModuleWithProviders} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,  
    Comp1Component,
    Comp2Component,
    NavComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    TestComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class CollectivitesSharedModule{
  static forRoot(): ModuleWithProviders<CollectivitesSharedModule> {
    const providers = []
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}
