import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paper3PageRoutingModule } from './paper3-routing.module';

import { Paper3Page } from './paper3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paper3PageRoutingModule
  ],
  declarations: [Paper3Page]
})
export class Paper3PageModule {}
