import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../../shared/menu';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishDetailComponent implements OnInit {
  dish: Dish;
  dishId: string;

  constructor( private route: ActivatedRoute, 
    private dishservice: DishService,
    private location: Location) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.dishId = params['id']
    })
    this.dish = this.dishservice.getDish(this.dishId)
  }

  goBack(): void {
    this.location.back();
  }
}
