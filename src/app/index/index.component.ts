import { Component, OnInit } from '@angular/core';
import { StocksComponent } from '../stocks/stocks.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }
  isDisableStockAddButton = false;
  ngOnInit(): void {

  }

  onclickStock(par:boolean) {
    this.isDisableStockAddButton = par;
  }
}


