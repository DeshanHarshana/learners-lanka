import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paper4PageRoutingModule } from './paper4-routing.module';

import { Paper4Page } from './paper4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paper4PageRoutingModule
  ],
  declarations: [Paper4Page]
})
export class Paper4PageModule {}
