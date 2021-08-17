import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paper2PageRoutingModule } from './paper2-routing.module';

import { Paper2Page } from './paper2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paper2PageRoutingModule
  ],
  declarations: [Paper2Page]
})
export class Paper2PageModule {}
