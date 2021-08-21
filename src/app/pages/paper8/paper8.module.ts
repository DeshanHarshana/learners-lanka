import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paper8PageRoutingModule } from './paper8-routing.module';

import { Paper8Page } from './paper8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paper8PageRoutingModule
  ],
  declarations: [Paper8Page]
})
export class Paper8PageModule {}
