import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DontsignPage } from './dontsign.page';

const routes: Routes = [
  {
    path: '',
    component: DontsignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DontsignPageRoutingModule {}
