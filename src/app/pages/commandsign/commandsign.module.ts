import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandsignPageRoutingModule } from './commandsign-routing.module';

import { CommandsignPage } from './commandsign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandsignPageRoutingModule
  ],
  declarations: [CommandsignPage]
})
export class CommandsignPageModule {}
