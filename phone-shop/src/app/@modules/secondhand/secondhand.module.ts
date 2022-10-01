import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondhandRoutingModule } from './secondhand-routing.module';
import { SecondhandComponent } from './secondhand/secondhand.component';


@NgModule({
  declarations: [
    SecondhandComponent
  ],
  imports: [
    CommonModule,
    SecondhandRoutingModule
  ]
})
export class SecondhandModule { }
