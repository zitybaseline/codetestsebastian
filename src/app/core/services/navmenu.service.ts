import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {
  private isOpen = false;

  constructor() { }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  getMenuState(): boolean {
    return this.isOpen;
  }
}