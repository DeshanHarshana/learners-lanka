import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandsignPage } from './commandsign.page';

const routes: Routes = [
  {
    path: '',
    component: CommandsignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandsignPageRoutingModule {}
