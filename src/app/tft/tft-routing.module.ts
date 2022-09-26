import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TFTPage } from './tft.page';

const routes: Routes = [
  {
    path: '',
    component: TFTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TFTPageRoutingModule {}
