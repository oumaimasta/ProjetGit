import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  searchQuery: string = '';
  isMenuOpen: boolean = false;

  

  onSearch(): void {
    if (this.searchQuery.trim()) {
      console.log('Recherche pour:', this.searchQuery);
      // Ajoutez ici votre logique de recherche
    }
    
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}