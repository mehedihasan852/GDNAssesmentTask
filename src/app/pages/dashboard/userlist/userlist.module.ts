import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlistRoutingModule } from './userlist-routing.module';
import { UserlistComponent } from './userlist.component';
import { MaterialModule } from 'src/app/materials/material/material.module';


@NgModule({
  declarations: [
    UserlistComponent
  ],
  imports: [
    CommonModule,
    UserlistRoutingModule,
    MaterialModule
  ]
})
export class UserlistModule { }
