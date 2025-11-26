import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products:Product[]=[
    {
      id:1,
      name:'Sauvage',
      brand:'dior',
      price:89.90,
      description: 'Parfum emblématique pour homme',
      imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.mVLeQwHGCp_Z95XJKf6FIwHaIQ?rs=1&pid=ImgDetMain&o=7&rm=3',
      category: 'Homme',
      volume: '100ml',
      inStock: true
    },
    {
      id: 2,
      name: 'J\'adore',
      brand: 'Dior',
      price: 95.90,
      description: 'Parfum floral pour femme',
      imageUrl: 'https://th.bing.com/th/id/R.aa9387c44011019fa767130f0a822f9c?rik=STG8SePdXMAfEw&pid=ImgRaw&r=0',
      category: 'Femme',
      volume: '100ml',
      inStock: true
    },
    {
      id: 3,
      name: 'Bleu de Chanel',
      brand: 'Chanel',
      price: 105,
      description: 'Parfum boisé pour homme',
      imageUrl: 'https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw7dfc23bb/images/hi-res/PID_principal/PID_principal_2/P3367005_principal.jpg?q=75',
      category: 'Homme',
      volume: '100ml',
      inStock: true
    },
    {
      id: 4,
      name: 'Acqua di Gio',
      brand: 'Giorgio Armani',
      price: 85,
      description: 'Un parfum aquatique frais, inspiré de la Méditerranée.',
      imageUrl: 'https://th.bing.com/th/id/OIP.bMLBtRU1bcSAek7CGT9QZgHaHa?w=209&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      category:'Homme',
      volume:'100ml',
      inStock:true
    },
    {
      id: 5,
      name: 'La Vie Est Belle',
      brand: 'Lancôme',
      price: 110,
      description: 'Un parfum floral et gourmand, joyeux et optimiste.',
      imageUrl: 'https://th.bing.com/th/id/OIP.7R_BaLp2TWWErEA5izbQNAHaGs?w=212&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      category:'Femme',
      volume:'100ml',
      inStock:true
    },
    {
      
      id: 6,
      name: 'Chanel No. 5',
      brand: 'Chanel',
      price: 100,
      description: 'Un parfum iconique et intemporel, symbole de l\'élégance française.',
      imageUrl: 'https://th.bing.com/th/id/OIF.iAGk7xyoqChgXyJTiHFMcA?w=205&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      category:'Femme',
      volume:'100ml',
      inStock:true
    },
    {
      
      id: 7,
      name: 'Miss Dior',
      brand: 'Dior',
      price: 190,
      description: 'Miss Dior incarne l\'élégance audacieuse et la joie de vivre',
      imageUrl: 'https://th.bing.com/th/id/OIP.sP_A-PAr5EACH-Gq2tJh0wHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
      category:'Femme',
      volume:'100ml',
      inStock:true
    },
    {
      
      id: 8,
      name: 'Poison Girl',
      brand: 'Dior',
      price: 140,
      description: 'Un parfum incarne l\'audace joyeuse et la féminité radicale de la femme Dior.',
      imageUrl: 'https://th.bing.com/th/id/OIP.m0JJhWKT7jnhs6ON-UY89QHaII?w=162&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      category:'Femme',
      volume:'100ml',
      inStock:true
    },
    {
      
      id: 9,
      name: 'Prada',
      brand: 'Paradoxe Intense',
      price:220,
      description: 'Prada Paradoxe Intense incarne une féminité puissante et radieuse',
      imageUrl: 'https://media.sephora.eu/content/dam/digital/pim/published/P/PRADA/617050/277617-media_swatch.jpg?scaleWidth=265&scaleHeight=265&scaleMode=fit',
      category:'Femme',
      volume:'30ml',
      inStock:true
    },
    {
      
      id: 10,
      name: 'L\'homme',
      brand: 'Yves Saint Laurent',
      price: 150,
      description: 'Un parfum iconique qui capture l\'audace et l\'élégance de l\'homme YSL',
      imageUrl: 'https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwf7ecc7bd/images/hi-res/alternates/PID_alternate1/PID_alternate1_1970/P10024131_1.jpg',
      category:'Homme',
      volume:'100ml',
      inStock:true
    },
  ];
  getProducts():Product[]{
    return this.products;
  }
  getProductById(id:number):Product | undefined{
    return this.products.find(product => product.id === id);
  }
  getProductsByCategory(category:string):Product[]{
    return this.products.filter(product => product.category === category);
  }
}
export type { Product };

