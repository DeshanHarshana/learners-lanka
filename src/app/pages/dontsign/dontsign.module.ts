import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DontsignPageRoutingModule } from './dontsign-routing.module';

import { DontsignPage } from './dontsign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DontsignPageRoutingModule
  ],
  declarations: [DontsignPage]
})
export class DontsignPageModule {}
