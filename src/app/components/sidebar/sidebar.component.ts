import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'shopping_shop', class: '' },
    { path: '/icons', title: 'Home Renovation Projects',  icon:'files_paper', class: '' },
    { path: '/typography', title: 'Contractors',  icon:'users_single-02', class: '' },
    { path: '/clientprofile', title: 'Clients',  icon:'users_single-02', class: '' },
    { path: '/businessRenovation', title: 'Business Projects',  icon:'files_paper', class: '' }


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
