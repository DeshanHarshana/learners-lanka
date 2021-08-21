import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignlistPage } from './signlist.page';

const routes: Routes = [
  {
    path: '',
    component: SignlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignlistPageRoutingModule {}
