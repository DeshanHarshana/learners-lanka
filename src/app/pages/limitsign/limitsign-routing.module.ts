import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LimitsignPage } from './limitsign.page';

const routes: Routes = [
  {
    path: '',
    component: LimitsignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LimitsignPageRoutingModule {}
