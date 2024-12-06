import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favorites: any[] = [];

  addFavorite(article: any) {
    if (!this.isFavorite(article)) {
      this.favorites.push(article);
    }
  }

  removeFavorite(article: any) {
    this.favorites = this.favorites.filter((item) => item.title !== article.title);
  }

  isFavorite(article: any): boolean {
    return !!this.favorites.find((item) => item.title === article.title);
  }

  getFavorites() {
    return this.favorites;
  }
}
