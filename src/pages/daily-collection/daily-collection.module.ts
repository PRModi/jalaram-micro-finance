import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyCollectionPage } from './daily-collection';

@NgModule({
  declarations: [
    DailyCollectionPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyCollectionPage),
  ],
})
export class DailyCollectionPageModule {}
