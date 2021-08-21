import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliceandriderPageRoutingModule } from './policeandrider-routing.module';

import { PoliceandriderPage } from './policeandrider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliceandriderPageRoutingModule
  ],
  declarations: [PoliceandriderPage]
})
export class PoliceandriderPageModule {}
