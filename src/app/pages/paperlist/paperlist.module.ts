import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaperlistPageRoutingModule } from './paperlist-routing.module';

import { PaperlistPage } from './paperlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaperlistPageRoutingModule
  ],
  declarations: [PaperlistPage]
})
export class PaperlistPageModule {}
