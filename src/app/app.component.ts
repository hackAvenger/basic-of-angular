import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DilogComponent } from './dilog/dilog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './service/api.service';
import { MatSort } from '@angular/material/sort';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud';
  constructor(private dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit(): void {

  }
}





