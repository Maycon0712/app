import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginnPageRoutingModule } from './loginn-routing.module';

import { LoginnPage } from './loginn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginnPageRoutingModule
  ],
  declarations: [LoginnPage]
})
export class LoginnPageModule {}
