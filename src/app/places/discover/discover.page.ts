import { Component, OnInit } from '@angular/core';
import { PlaceService } from './../place.service';
import { Place } from './../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.loadedPlaces = this.placeService.getPlaces();
  }

}
