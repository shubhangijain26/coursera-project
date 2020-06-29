import { Component, OnInit } from '@angular/core';
import { Dish } from '../../shared/menu';
import { DISHES } from '../../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[] ;
  selectedDish : Dish;
  constructor() { }

  ngOnInit() { 
    this.dishes= DISHES;
  }

  onSelect(dish: Dish) {
     this.selectedDish = dish;
  }

}
