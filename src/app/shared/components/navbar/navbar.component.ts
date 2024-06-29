import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;

  navLinks: string[] = [
    'home',
    'demo',
  ];


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  
}
