import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paper9Page } from './paper9.page';

const routes: Routes = [
  {
    path: '',
    component: Paper9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paper9PageRoutingModule {}
