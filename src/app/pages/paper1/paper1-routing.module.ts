import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paper1Page } from './paper1.page';

const routes: Routes = [
  {
    path: '',
    component: Paper1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paper1PageRoutingModule {}
