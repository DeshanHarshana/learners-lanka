import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoadsignPageRoutingModule } from './roadsign-routing.module';

import { RoadsignPage } from './roadsign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoadsignPageRoutingModule
  ],
  declarations: [RoadsignPage]
})
export class RoadsignPageModule {}
