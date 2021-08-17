import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paper4Page } from './paper4.page';

const routes: Routes = [
  {
    path: '',
    component: Paper4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paper4PageRoutingModule {}
