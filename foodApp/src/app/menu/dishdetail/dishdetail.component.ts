import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../../shared/menu';

@Component({
  selector: 'dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishDetailComponent implements OnInit {
@Input() dish: Dish;
  constructor() { }

  ngOnInit() {}
}
