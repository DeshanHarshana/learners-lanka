import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignlistPageRoutingModule } from './signlist-routing.module';

import { SignlistPage } from './signlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignlistPageRoutingModule
  ],
  declarations: [SignlistPage]
})
export class SignlistPageModule {}
