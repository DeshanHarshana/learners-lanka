import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paper1PageRoutingModule } from './paper1-routing.module';

import { Paper1Page } from './paper1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paper1PageRoutingModule
  ],
  declarations: [Paper1Page]
})
export class Paper1PageModule {}
