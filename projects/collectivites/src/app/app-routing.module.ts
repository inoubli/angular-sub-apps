import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

const routes: Routes = [
  { path: 'collectivites/one', component: Comp1Component },
  { path: 'collectivites/two', component: Comp2Component },
  { path: 'collectivites', redirectTo: 'collectivites/one' }
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
