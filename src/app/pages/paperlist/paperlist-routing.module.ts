import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaperlistPage } from './paperlist.page';

const routes: Routes = [
  {
    path: '',
    component: PaperlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaperlistPageRoutingModule {}
