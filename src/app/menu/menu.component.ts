import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuItem, PrimeTemplate} from 'primeng/api';
import {Menubar} from 'primeng/menubar';
import {Avatar} from 'primeng/avatar';
import {Menu} from 'primeng/menu';
import {Ripple} from 'primeng/ripple';
import {Badge} from 'primeng/badge';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [
    Menubar,
    Avatar,
    PrimeTemplate,
    Menu,
    Ripple,
    Badge,
    NgIf,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  @ViewChild('avatarMenu') avatarMenu?: Menu;

  avatarMenuItems: MenuItem[] = [];
  items: MenuItem[] = [];
  avatarPath = 'assets/avatar/avatar.jpg';

  ngOnInit() {
    this.items = [
      {
        label: 'Histoire',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Patrimoine',
        icon: 'pi pi-book',
        routerLink: '/articles'
      },
      {
        label: 'Association',
        icon: 'pi pi-envelope',
        routerLink: '/contact'
      },
      {
        label: 'Médiatech',
        icon: 'pi pi-envelope',
        routerLink: '/contact'
      }
    ];

    this.avatarMenuItems = [
      {
        separator: true
      },
      {
        label: 'Mon Site',
        items: [
          {
            label: 'Gestion Articles',
            icon: 'pi pi-file',
          },
          {
            label: 'Gestion Site',
            icon: 'pi pi-file',
          },
          {
            label: 'Gestion Association',
            icon: 'pi pi-file',
          }
        ]
      },
      {
        separator: true
      },
      {
        label: 'Mon Profil',
        items: [
          {
            label: 'Déconnexion',
            icon: 'pi pi-sign-out',
            command: () => {
              // Action à réaliser (ex: déconnecter, etc.)
              console.log('Déconnexion');
            }
          }
        ]
      }
    ];
  }

  onLogoClick() {
    console.log('Logo cliqué !');
  }

  onAvatarClick(event: MouseEvent) {
    this.avatarMenu?.toggle(event);
  }
}
