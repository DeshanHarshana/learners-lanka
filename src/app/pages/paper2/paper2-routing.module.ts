import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paper2Page } from './paper2.page';

const routes: Routes = [
  {
    path: '',
    component: Paper2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paper2PageRoutingModule {}
