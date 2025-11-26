import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart';
import { CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-paiement',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './paiement.html',
  styleUrl: './paiement.scss',
})
export class Paiement implements OnInit {
  cartItems: CartItem[] = [];
  total = 0;
  
  address = {
    nom: '',
    prenom: '',
    adresse: '',
    codePostal: '',
    ville: '',
    pays: 'France',
    telephone: ''
  };

  paymentMethod: 'livraison' | 'carte' = 'livraison';

  cardDetails = {
    numeroCarte: '',
    nomCarte: '',
    dateExpiration: '',
    cvv: ''
  };

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.total = this.cartService.getTotal();
    });

    // Rediriger si le panier est vide
    if (this.cartItems.length === 0) {
      this.router.navigate(['/cart']);
    }
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      const orderData: any = {
        address: this.address,
        paymentMethod: this.paymentMethod,
        items: this.cartItems,
        total: this.total
      };

      if (this.paymentMethod === 'carte') {
        orderData.cardDetails = this.cardDetails;
      }

      console.log('Commande passée:', orderData);
      
      alert('Commande confirmée ! Merci pour votre achat🤍.');
      this.cartService.clearCart();
      this.router.navigate(['/products']);
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }

  isFormValid(): boolean {
    const addressValid = !!(
      this.address.nom &&
      this.address.prenom &&
      this.address.adresse &&
      this.address.codePostal &&
      this.address.ville &&
      this.address.telephone &&
      this.paymentMethod
    );

    if (this.paymentMethod === 'carte') {
      return addressValid && !!(
        this.cardDetails.numeroCarte &&
        this.cardDetails.nomCarte &&
        this.cardDetails.dateExpiration &&
        this.cardDetails.cvv
      );
    }

    return addressValid;
  }

  formatCardNumber(event: any): void {
    let value = event.target.value.replace(/\s/g, '');
    if (value.length > 16) {
      value = value.substring(0, 16);
    }
    // Ajouter des espaces tous les 4 chiffres
    value = value.match(/.{1,4}/g)?.join(' ') || value;
    this.cardDetails.numeroCarte = value;
  }

  formatExpirationDate(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    this.cardDetails.dateExpiration = value;
  }

  formatCVV(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 4) {
      value = value.substring(0, 4);
    }
    this.cardDetails.cvv = value;
  }

  formatCardName(event: any): void {
    this.cardDetails.nomCarte = event.target.value.toUpperCase();
  }
}

