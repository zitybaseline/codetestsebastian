import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavMenuService } from '../../../core/services/navmenu.service';
import { NavmenuComponent } from '../navmenu/navmenu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, NavmenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private navMenuService: NavMenuService) {}

  navLinks: string[] = ['home', 'demo'];

  toggleMenu(): void {
    this.navMenuService.toggleMenu();
  }

  isMenuOpen(): boolean {
    return this.navMenuService.getMenuState();
  }

  onOutsideClick(event: MouseEvent): void {
    if (this.isMenuOpen()) {
      this.navMenuService.toggleMenu();
    }
  }
}
