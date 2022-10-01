import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialOfferRoutingModule } from './special-offer-routing.module';
import { SpecialOfferComponent } from './special-offer/special-offer.component';


@NgModule({
  declarations: [
    SpecialOfferComponent
  ],
  imports: [
    CommonModule,
    SpecialOfferRoutingModule
  ]
})
export class SpecialOfferModule { }
