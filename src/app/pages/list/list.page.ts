import {Component, inject, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonContent,
  IonHeader, IonIcon, IonImg,
  IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel,
  IonList,
  IonListHeader, IonReorder, IonReorderGroup,
  IonTitle, IonToggle,
  IonToolbar
} from '@ionic/angular/standalone';
import {DataService} from "../../services/data.service";
import {Usuario} from "../../common/interfaces";
import {HeaderComponent} from "../../components/header/header.component";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonList, IonListHeader, IonItem, IonAvatar, IonImg, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonToggle, IonReorderGroup, IonReorder]
})
export class ListPage implements OnInit {

  @ViewChild('lista', {static: false}) lista!: IonList;
  private dataService: DataService = inject(DataService);
  private toastService: ToastService  = inject(ToastService);
  usuarios: Usuario[] =  [];
  habilitado: boolean = false;
  constructor() { }

  ngOnInit() {
    this.loadUsers();
  }

  call(user: Usuario) {
    console.log(user);
    this.toastService.listToast('Llamando a... '+user.phone);
    this.lista.closeSlidingItems();
  }

  share(user: Usuario) {
    console.log(user);
    this.toastService.listToast('Compartiendo con... '+user.name);
    this.lista.closeSlidingItems();
  }

  favorite(user: Usuario) {
    console.log(user);
    this.toastService.listToast('Añadiendo a favoritos a... '+user.name);
    this.lista.closeSlidingItems();
  }


  reordenar(event: any) {
    console.log(event);
    // En primer lugar recogemos el elemento que ha seleccionado el usuario y lo guardo en otro array
    const itemMover = this.usuarios.splice(event.detail.from,1)[0];
    // Ahora insertamos el elemento que teníamos en el array auxiliar para guardarlo en nuestro array
    this.usuarios.splice(event.detail.to, 0, itemMover);
    // Por último hacemos efectivo el cambio
    event.detail.complete();
  }

  private loadUsers() {
    this.dataService.getUsers().subscribe(
      {
        next:  (data: Usuario[]) => {
          this.usuarios = data;
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Users loaded!');
        }
      }

    );
  }

  }
