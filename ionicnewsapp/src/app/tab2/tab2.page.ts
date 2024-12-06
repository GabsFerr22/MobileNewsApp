import { Component } from '@angular/core';
import { FavoritesService } from '../services/favoritos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  favorites: any[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ionViewWillEnter() {
    this.favorites = this.favoritesService.getFavorites();
  }
}
