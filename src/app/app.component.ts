import {Component} from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {MenuComponent} from "./components/menu/menu.component";
import {addIcons} from "ionicons";
import {
  americanFootball,
  beaker,
  caretForwardCircle,
  grid,
  logoAppleAppstore,
  shareSocial,
  star,
  trash,
  close,
  card,
  pin,
  car,
  logoFacebook,
  logoTiktok,
  logoInstagram,
  logoYoutube,
  logoGithub,
  logoTwitter, add, albums, ellipsisHorizontalOutline, list, infinite, heart, call, infiniteOutline, phonePortrait
} from "ionicons/icons";
import {register} from "swiper/element/bundle";
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, MenuComponent]
})
export class AppComponent {
  constructor() {
    addIcons({grid, logoAppleAppstore, americanFootball, beaker, star, trash, shareSocial, caretForwardCircle, close, card, pin, car,
    logoFacebook,logoTwitter,logoTiktok,logoInstagram,logoYoutube,logoGithub,add, albums, ellipsisHorizontalOutline, list, heart, call,  infinite,  infiniteOutline,
    phonePortrait});
  }
}
