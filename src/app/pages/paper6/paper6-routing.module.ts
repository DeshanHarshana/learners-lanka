import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paper6Page } from './paper6.page';

const routes: Routes = [
  {
    path: '',
    component: Paper6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paper6PageRoutingModule {}
