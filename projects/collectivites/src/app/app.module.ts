import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ModuleWithProviders} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { SharedModule } from './../../../../src/app/shared/shared.module';
import { MyLibraryModule } from '../../../my-library/src/lib/my-library.module';


@NgModule({
  declarations: [
    AppComponent,  
    Comp1Component,
    Comp2Component,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MyLibraryModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
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
