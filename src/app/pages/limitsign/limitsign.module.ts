import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimitsignPageRoutingModule } from './limitsign-routing.module';

import { LimitsignPage } from './limitsign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimitsignPageRoutingModule
  ],
  declarations: [LimitsignPage]
})
export class LimitsignPageModule {}
