import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private Http: HttpClient) { }
  prodBase:String="https://json-server-mat-ui.herokuapp.com/"//production
  localBase:String="https://json-server-mat-ui.herokuapp.com/"

  postDataToServer(data: any, url: String) {
    return this.Http.post<any>("https://json-server-mat-ui.herokuapp.com/" + url + "", data);
  }

  getProduct(url: String) {
    return this.Http.get<any>("https://json-server-mat-ui.herokuapp.com/" + url);
  }

  deleteProduct(url: String, id: number) {
    return this.Http.delete<any>("https://json-server-mat-ui.herokuapp.com/" + url + "/" + id);
  }

  updateProduct(url: String, id: number, data: any) {
    return this.Http.put<any>("https://json-server-mat-ui.herokuapp.com/" + url+"/"+id, data);
  }

  getBrands(url: String) {
    return this.Http.get<any>("https://json-server-mat-ui.herokuapp.com/" + url);
  }

  getUser(url: String) {
    return this.Http.get<any>("https://json-server-mat-ui.herokuapp.com/" + url);
  }

}
