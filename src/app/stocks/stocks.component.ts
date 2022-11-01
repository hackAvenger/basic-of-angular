import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DilogComponent } from '../dilog/dilog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { RouterLinkWithHref } from '@angular/router';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  public name = "";
  displayedColumns: string[] = ['id', 'productName', 'imei', 'price', 'action'];
  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit(): void {
    this.getProductData();
  }

  openDialog() {
    this.dialog.open(DilogComponent, {
      width: "40%"
    }).afterClosed().subscribe(val=>{
      if(val==="save"){
        this.getProductData();
      }
    });
  }

  getProductData() {
    this.apiService.getProduct("products").subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (res) => {
        alert("Something went Wrong");
      }
    })
  }

  deleteProduct(id: number) {
    this.apiService.deleteProduct("products", id).subscribe({
      next: (res) => {
        alert(id + " deleted Successfully..!!");
        this.getProductData();
      },
      error: (res) => {
        alert("Something went Wrong");
      }
    })
  }

  editProduct(row: any) {
    this.dialog.open(DilogComponent, {
      width: "40%",
      data: row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getProductData();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
