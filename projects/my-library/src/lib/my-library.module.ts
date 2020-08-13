import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { GlobalCompComponent } from './global-comp/global-comp.component';



@NgModule({
  declarations: [MyLibraryComponent, GlobalCompComponent],
  imports: [
  ],
  exports: [MyLibraryComponent,GlobalCompComponent]
})
export class MyLibraryModule { }
