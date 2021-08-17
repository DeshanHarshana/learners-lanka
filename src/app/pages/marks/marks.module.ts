import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarksPageRoutingModule } from './marks-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { MarksPage } from './marks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarksPageRoutingModule,
    NgCircleProgressModule
  ],
  declarations: [MarksPage]
})
export class MarksPageModule {}
