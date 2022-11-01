import { ApiService } from '../service/api.service';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  displayedColumns = ['id', 'name', 'email', 'contacts','status' ,'type','action','details'];
  dataSource: any;
  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.apiService.getProduct("users").subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        console.log(res);
      },
      error: (res) => {
        alert("Something went Wrong");
      }
    })
  }
}
