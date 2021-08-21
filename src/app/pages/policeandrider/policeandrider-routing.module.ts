import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliceandriderPage } from './policeandrider.page';

const routes: Routes = [
  {
    path: '',
    component: PoliceandriderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliceandriderPageRoutingModule {}
