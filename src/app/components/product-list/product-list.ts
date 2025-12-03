                                                                                                                                                                                                                                                                                                      import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  
  products: Product[] = [];
  displayedProducts: Product[] = [];  // ← liste finale
  categories: string[] = ['Tous', 'Homme', 'Femme'];
  selectedCategory: string = 'Tous';

  searchTerm: string = ""; // ← champ de recherche

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.displayedProducts = this.products;
  }

  /** Filtre par catégorie */
  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  /** Filtre par recherche + catégorie */
  applyFilters(): void {
    let filtered = this.products;

    // Filtre par catégorie
    if (this.selectedCategory !== 'Tous') {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }

    // Filtre par recherche
    if (this.searchTerm.trim() !== "") {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    this.displayedProducts = filtered;
  }

  /** Quand on écrit dans la recherche */
  onSearchChange() {
    this.applyFilters();
  }
  addToCart(product: Product): void {
  this.cartService.addToCart(product);
  alert(`${product.name} ajouté au panier !`);
}


  
}
