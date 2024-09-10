import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'grid-buttons',
    loadComponent: () => import('./pages/grid-buttons/grid-buttons.page').then( m => m.GridButtonsPage)
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar/avatar.page').then( m => m.AvatarPage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./pages/alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./pages/action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
  {
    path: 'cards',
    loadComponent: () => import('./pages/cards/cards.page').then( m => m.CardsPage)
  },
  {
    path: 'fab',
    loadComponent: () => import('./pages/fab/fab.page').then( m => m.FabPage)
  },
  {
    path: 'slides',
    loadComponent: () => import('./pages/slides/slides.page').then( m => m.SlidesPage)
  },
  {
    path: 'slides2',
    loadComponent: () => import('./pages/slides2/slides2.page').then( m => m.Slides2Page)
  },
  {
    path: 'list',
    loadComponent: () => import('./pages/list/list.page').then( m => m.ListPage)
  },
  {
    path: 'infinite-scroll',
    loadComponent: () => import('./pages/infinite-scroll/infinite-scroll.page').then( m => m.InfiniteScrollPage)
  },
  {
    path: 'infinite2',
    loadComponent: () => import('./pages/infinite2/infinite2.page').then( m => m.Infinite2Page)
  },
  {
    path: 'modal',
    loadComponent: () => import('./pages/modal/modal.page').then( m => m.ModalPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then( m => m.TabsPage),
    children: [
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full',
      },
      {
        path: 'account',
        loadComponent: () => import('./pages/avatar/avatar.page').then( m => m.AvatarPage)
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/list/list.page').then( m => m.ListPage)
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/cards/cards.page').then( m => m.CardsPage)
      }
    ]

  },
  {
    path: 'refresher-skeleton',
    loadComponent: () => import('./pages/refresher-skeleton/refresher-skeleton.page').then( m => m.RefresherSkeletonPage)
  },
  {
    path: 'accordion',
    loadComponent: () => import('./pages/accordion/accordion.page').then( m => m.AccordionPage)
  },
  {
    path: 'popover',
    loadComponent: () => import('./pages/popover/popover.page').then( m => m.PopoverPage)
  },
  {
    path: 'popover-data',
    loadComponent: () => import('./pages/popover-data/popover-data.page').then( m => m.PopoverDataPage)
  },
  {
    path: 'search-bar',
    loadComponent: () => import('./pages/search-bar/search-bar.page').then( m => m.SearchBarPage)
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./pages/checkbox/checkbox.page').then( m => m.CheckboxPage)
  },
  {
    path: 'searchable-select',
    loadComponent: () => import('./pages/searchable-select/searchable-select.page').then( m => m.SearchableSelectPage)
  },
  {
    path: 'datetime',
    loadComponent: () => import('./pages/datetime/datetime.page').then( m => m.DatetimePage)
  },
];
