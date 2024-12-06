import { Component } from '@angular/core';
import { NewsService } from '../services/newsapi.service';
import { FavoritesService } from '../services/favoritos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  news: any[] = [];
  currentCategory: string = 'general'; 

  constructor(
    private newsService: NewsService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.loadNews(this.currentCategory);
  }

  loadNews(category: string) {
    this.newsService.getTopHeadlinesByCategory(category).subscribe(
      (response) => {
        this.news = response.articles; 
        console.log(this.news);
      },
      (error) => {
        console.error('Erro ao carregar notícias:', error);
      }
    );
  }

  onCategoryChange(event: any) {
    this.currentCategory = event.detail.value; 
    this.loadNews(this.currentCategory); 
  }

  toggleFavorite(article: any) {
    if (this.isFavorite(article)) {
      this.favoritesService.removeFavorite(article);
      alert('Removido dos favoritos!');
    } else {
      this.favoritesService.addFavorite(article);
      alert('Adicionado aos favoritos!');
    }
  }

  isFavorite(article: any): boolean {
    return this.favoritesService.isFavorite(article);
  }
}
