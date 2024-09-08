import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar, IonBadge,
  IonContent,
  IonHeader, IonImg, IonInfiniteScroll, IonInfiniteScrollContent,
  IonItem, IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  LoadingController
} from '@ionic/angular/standalone';
import {InfiniteScrollCustomEvent} from "@ionic/angular";
import {environment} from "../../../environments/environment";
import {DataService} from "../../services/data.service";
import {ApiMoviesResult, Movie} from "../../common/interfaces";
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-infinite2',
  templateUrl: './infinite2.page.html',
  styleUrls: ['./infinite2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonList, IonItem, IonAvatar, IonImg, IonLabel, IonBadge, IonInfiniteScroll, IonInfiniteScrollContent]
})
export class Infinite2Page implements OnInit {
  private dataService: DataService = inject(DataService);
  movies: Movie[] = [];
  currentPage = 1;
  imageUrl = environment.images;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles'
    });
    await loading.present();

    this.dataService.loadMovies(this.currentPage).subscribe(
      {
        next:   (res: ApiMoviesResult) => {
          loading.dismiss();
          this.movies.push(...res.results);

          event?.target.complete();
          if(event){
            event.target.disabled = res.total_pages === this.currentPage;
          }
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Movies loaded!');
        }
      }

    );
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }


}
