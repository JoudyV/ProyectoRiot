import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TFTPageRoutingModule } from './tft-routing.module';

import { TFTPage } from './tft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TFTPageRoutingModule
  ],
  declarations: [TFTPage]
})
export class TFTPageModule {}
