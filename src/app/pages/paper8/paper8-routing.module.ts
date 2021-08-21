import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paper8Page } from './paper8.page';

const routes: Routes = [
  {
    path: '',
    component: Paper8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paper8PageRoutingModule {}
