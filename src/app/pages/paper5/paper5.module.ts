import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paper5PageRoutingModule } from './paper5-routing.module';

import { Paper5Page } from './paper5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paper5PageRoutingModule
  ],
  declarations: [Paper5Page]
})
export class Paper5PageModule {}
