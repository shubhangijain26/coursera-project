import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/menu';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { Promotion } from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish :Dish;
  promotion: Promotion;
  
  constructor(private dishService: DishService, private promoService: PromotionService) { }

  ngOnInit() {
   this.dish = this.dishService.getFeaturedDish();
   this.promotion = this.promoService.getFeaturedPromotion();
  }

}
