import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'userlist',
        loadChildren: () => import('./userlist/userlist.module').then(m => m.UserlistModule)
      },
      {
        path: 'adduser',
        loadChildren: () => import('./adduser/adduser.module').then(m => m.AdduserModule)
      },
      {
        path: 'edituser/:id',
        loadChildren: () => import('./edituser/edituser.module').then(m => m.EdituserModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
