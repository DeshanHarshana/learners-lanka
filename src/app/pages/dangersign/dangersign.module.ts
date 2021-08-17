import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DangersignPageRoutingModule } from './dangersign-routing.module';

import { DangersignPage } from './dangersign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DangersignPageRoutingModule
  ],
  declarations: [DangersignPage]
})
export class DangersignPageModule {}
