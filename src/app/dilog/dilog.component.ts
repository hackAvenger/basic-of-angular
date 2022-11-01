import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
@Component({
  selector: 'app-dilog',
  templateUrl: './dilog.component.html',
  styleUrls: ['./dilog.component.css']
})
export class DilogComponent implements OnInit {
  brands = ["Apple", "Vivo", "Nokia", "Oppo", "Realme","Redmi"];
  productForm!: FormGroup
  saveOrEdit = "save";
  constructor(private form: FormBuilder, private api: ApiService, private dilogRef: MatDialogRef<DilogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.productForm = this.form.group({
      productName: ['', Validators.required],
      brandName: ['', Validators.required],
      imei: ['', Validators.required],
      productPrice: ['', Validators.required],
    })

    if (this.editData) {
      this.saveOrEdit = "update";
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['brandName'].setValue(this.editData.brandName);
      this.productForm.controls['imei'].setValue(this.editData.imei);
      this.productForm.controls['productPrice'].setValue(this.editData.productPrice);
    }
  }

  saveProductData() {
    if (!this.editData) {
      if (this.productForm.valid) {
        this.api.postDataToServer(this.productForm.value, "products")
          .subscribe({
            next: (res) => {
              alert("Product Added");
              this.productForm.reset;
              this.dilogRef.close("save");
            },
            error: () => {
              alert("Something Went Wrong")
            }
          })
      }
    } else {
      this.updateProduct();
    }
  }

  updateProduct() {
    this.api.updateProduct("products", this.editData.id, this.productForm.value).subscribe({
      next: (res) => {
        alert("Product Updated");
        this.productForm.reset;
        this.dilogRef.close("update");
      },
      error: () => {
        alert("Something Went Wrong")
      }
    })
  }
}

