import { Injectable } from '@angular/core';
import { Dish } from '../shared/menu';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes() : Dish[] {
     return DISHES;
  }
}
