import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectivitesSharedModule } from 'projects/collectivites/src/app/app.module';
import { EntreprisesSharedModule } from 'projects/entreprises/src/app/app.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'home', 
    component: DashboardComponent
  },
  {
    path: 'collectivites', 
    loadChildren: '../../projects/collectivites/src/app/app.module#CollectivitesSharedModule'
  },
  {
    path: 'entreprises', 
    loadChildren: '../../projects/entreprises/src/app/app.module#EntreprisesSharedModule'},
  { 
    path: '**', redirectTo: '/collectivites/one'
  }
 ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CollectivitesSharedModule.forRoot(),
    EntreprisesSharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
