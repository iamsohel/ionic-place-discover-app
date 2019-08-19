import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';
import { PlacesRoutingModule } from './places-routing.module';
import { PlaceService } from './place.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PlacesRoutingModule
  ],
  declarations: [PlacesPage],
  providers:[
    PlaceService
  ]
})
export class PlacesPageModule {}
