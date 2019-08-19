import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private _places: Place[] = [
    new Place(
      'p1',
      'InterContinetal',
      'Hotel Sonargoan',
      'https://pix10.agoda.net/hotelImages/276/276118/276118_16031014010040651645.jpg?s=1024x768',
      12000
    ),
    new Place(
      'p2',
      'RuposhiBangla',
      'Hotel RuposhiBangla',
      'https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/big_2/public/feature/images/js_penalty_ruposhi_bangla.jpg?itok=32eEXq5L',
      14000
    ),
    new Place(
      'p3',
      'Radison Blu',
      'Hotel Radison Blu',
      'https://cdn.businesstraveller.com/wp-content/uploads/fly-images/929278/Radisson-Blu-Admiral-Hotel-Toronto-Harbourfront-e1555069411107-916x515.jpg',
      15000
    ),

  ];

  getPlaces(){
    return [...this._places];
  }
  constructor() { }

  getPlace(id: string){
    return {...this._places.find(place => place.id === id)};
  }
}
