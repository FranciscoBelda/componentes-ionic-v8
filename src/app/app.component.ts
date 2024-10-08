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
  logoTwitter,
  add,
  albums,
  ellipsisHorizontalOutline,
  list,
  infinite,
  heart,
  call,
  infiniteOutline,
  phonePortrait,
  cog,
  person,
  settings,
  arrowDownCircleOutline,
  layersOutline,
  caretDownCircle,
  flame,
  personAddOutline,
  search,
  checkmarkCircleOutline, searchOutline, calendarNumber
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
    addIcons({grid, logoAppleAppstore, americanFootball, beaker, star, trash, shareSocial, caretForwardCircle,
      close, card, pin, car,
    logoFacebook,logoTwitter,logoTiktok,logoInstagram,logoYoutube,logoGithub,add, albums, ellipsisHorizontalOutline,
      list, heart, call,  infinite,  infiniteOutline,
    phonePortrait, cog, settings, person, arrowDownCircleOutline, layersOutline, caretDownCircle, flame,
      personAddOutline, search, checkmarkCircleOutline, searchOutline, calendarNumber});
  }
}
