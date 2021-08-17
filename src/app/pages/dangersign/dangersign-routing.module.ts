import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DangersignPage } from './dangersign.page';

const routes: Routes = [
  {
    path: '',
    component: DangersignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DangersignPageRoutingModule {}
