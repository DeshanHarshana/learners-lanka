import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmallvehiclePageRoutingModule } from './smallvehicle-routing.module';

import { SmallvehiclePage } from './smallvehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmallvehiclePageRoutingModule
  ],
  declarations: [SmallvehiclePage]
})
export class SmallvehiclePageModule {}
