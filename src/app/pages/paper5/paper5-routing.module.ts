import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paper5Page } from './paper5.page';

const routes: Routes = [
  {
    path: '',
    component: Paper5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paper5PageRoutingModule {}
