import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paper9PageRoutingModule } from './paper9-routing.module';

import { Paper9Page } from './paper9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paper9PageRoutingModule
  ],
  declarations: [Paper9Page]
})
export class Paper9PageModule {}
