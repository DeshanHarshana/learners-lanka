import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoadsignPage } from './roadsign.page';

const routes: Routes = [
  {
    path: '',
    component: RoadsignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoadsignPageRoutingModule {}
