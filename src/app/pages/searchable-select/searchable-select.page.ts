import {Component, EventEmitter, inject, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel, IonModal, IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {SearchbarCustomEvent} from "@ionic/angular";
import {DataService} from "../../services/data.service";
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-searchable-select',
  templateUrl: './searchable-select.page.html',
  styleUrls: ['./searchable-select.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonCheckbox, IonItem, HeaderComponent, IonInput, IonModal, IonButtons, IonButton, IonSearchbar]
})
export class SearchableSelectPage implements OnChanges {

  @Output() selectedChanged: EventEmitter<any> = new EventEmitter();
  private dataService: DataService = inject(DataService);
  title = 'Search';
  multiple = false;
  itemTextField = 'name.first';
  users: any[] = [];
  isOpen = false;
  selected: any[] = [];
  filtered: any[] = [];

  constructor() {
    this.loadUsers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filtered = this.users;
  }


  loadUsers() {
    this.dataService.loadUsers().subscribe(
      {
        next: (res: any) => {
          this.users = res.results;
          this.filtered = this.users;
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Users Loaded!');
        }
      }
    );
  }

  /* Inicio de controles del modal */
  open() {
    this.isOpen = true;
  }

  cancel() {
    this.isOpen = false;
  }

  confirm() {
    this.isOpen = false;
  }

  /* Fin de los controles del modal */

  /* Función para pasar como parámetro una estructura de objeto compleja, en nuestro caso sacar name.first */
  leaf = (obj: any) =>
    this.itemTextField.split('.').reduce((value, el) => value[el], obj);

  itemSelected(myItem: any) {
    /* Si la selección es múltiple y hay varios valores, los borramos y nos quedamos con el seleccionado */
    if (!this.multiple) {
      if (this.selected.length>0) {
        this.selected = [];
        // Ponemos en false todos los elementos
        this.filtered.forEach((item: any) => item.selected = false);
        // Ponemos en true el seleccionado
        this.filtered[this.filtered.findIndex(item => item === myItem)].selected = true;
      }
    }

    /* Ponemos o quitamos los elementos seleccionados del array selected */
    if (myItem.selected) {
      this.selected.push(myItem);
    } else {
      this.selected.splice(this.selected.indexOf(myItem), 1);
    }

    /* Avisamos del cambio en selected */
    this.selectedChanged.emit(this.selected);
    if (!this.multiple) {
      this.isOpen = false;
    }
  }


  filter(event: SearchbarCustomEvent) {

    if (event.detail.value) {
      if(event.detail.value.length === 0){
        this.filtered = this.users;
      }else {
        const filter = event.detail.value.toLowerCase();

        /* Filtramos por la palabra de búsqueda */
        this.filtered = this.users.filter(item => this.leaf(item).toLowerCase().indexOf(filter) >= 0);
      }
      }
  }


  clear() {
    this.filtered = this.users;
  }
}
