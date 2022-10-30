import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
@Component({
  selector: 'app-dilog',
  templateUrl: './dilog.component.html',
  styleUrls: ['./dilog.component.css']
})
export class DilogComponent implements OnInit {
  brands =["Apple","Vivo","Nokia","Oppo","Realme"];
  productForm!: FormGroup
  saveOrEdit="submit";
  constructor(private form: FormBuilder, private api: ApiService, private dilogRef: MatDialogRef<DilogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.form.group({
      productName: ['', Validators.required],
      brandName: [''],
      imei: ['', Validators.required],
      productPrice: ['', Validators.required],
    })
  }

  saveProductData() {
    if (this.productForm.valid) {
      this.api.postDataToServer(this.productForm.value, "products")
        .subscribe({
          next: (res) => {
            alert("Product Added");
            this.productForm.reset;
            this.dilogRef.close("Data Saved");
          },
          error: () => {
            alert("Something Went Wrong")
          }
        })
    }
  }

  getBrandsOfPhones(){
    this.api.getBrands("brands")
    .subscribe({
      next: (res) => {
        this.brands=res;
      },
      error: () => {
        alert("Something Went Wrong")
      }
    })
  }

}
