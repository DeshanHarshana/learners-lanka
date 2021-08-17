import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmallvehiclePage } from './smallvehicle.page';

const routes: Routes = [
  {
    path: '',
    component: SmallvehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmallvehiclePageRoutingModule {}
