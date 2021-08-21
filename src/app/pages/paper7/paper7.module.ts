import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paper7PageRoutingModule } from './paper7-routing.module';

import { Paper7Page } from './paper7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paper7PageRoutingModule
  ],
  declarations: [Paper7Page]
})
export class Paper7PageModule {}
