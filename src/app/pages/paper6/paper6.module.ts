import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paper6PageRoutingModule } from './paper6-routing.module';

import { Paper6Page } from './paper6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paper6PageRoutingModule
  ],
  declarations: [Paper6Page]
})
export class Paper6PageModule {}
