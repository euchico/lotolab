import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly isMenuOpen = signal(false);
  protected readonly drawNumbers = ['01', '03', '04', '07', '09', '10', '13', '15', '18', '20', '21', '22', '23', '24', '25'];
  protected readonly chartHeights = [42, 79, 57, 33, 68, 46, 88, 62, 73, 51];

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
