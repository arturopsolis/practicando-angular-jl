import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  allFruits = ["manzana", "pera", "mango", "melon", "lichi", "mamey", "platano", "sandia", "lima", "caña"];

  constructor() { }

  getFruits(){
    return this.allFruits;
  }
}
