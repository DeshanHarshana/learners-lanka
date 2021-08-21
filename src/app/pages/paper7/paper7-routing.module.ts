import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paper7Page } from './paper7.page';

const routes: Routes = [
  {
    path: '',
    component: Paper7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paper7PageRoutingModule {}
