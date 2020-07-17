import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"

@Component({
  selector: 'app-adminroles',
  templateUrl: './adminroles.component.html',
  styleUrls: ['./adminroles.component.css']
})
export class AdminrolesComponent implements OnInit {

  ENDPOINT = "https://tecbox.herokuapp.com/roles";

  roles = [];
  currentRol = [];

  editResponse: string;
  createResponse: string;
  deleteResponse: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.http.get<any>(this.ENDPOINT).subscribe
    (message => {
      this.roles = message.result;
      console.log(this.roles);
      
    });
  }

  selectProduct(event) {
    let i;
    for (i = 0; i < this.roles.length; i++) {
      if (this.roles[i][0] == event.target.attributes.id) {
        this.currentRol = this.roles[i];
        break;
      }
    }
  }

  updateProduct(event) {
    let query = []

    if(document.getElementById("input1").nodeValue != null) {
        query.push([this.currentRol[0], document.getElementById("input1").nodeValue, this.currentRol[1]]);
    }
    if(document.getElementById("input2").nodeValue != null) {
      query.push([this.currentRol[0], this.currentRol[0], document.getElementById("input2").nodeValue]);
    }
    this.http.put<any>(this.ENDPOINT, query).subscribe
    (response => {
      this.editResponse = "Actualización Exitosa";
    });
    
  }

  createProduct(event) {
    const data = [[document.getElementById("get1").nodeValue, document.getElementById("get2").nodeValue]];
    console.log(data);
    this.http.post<any>(this.ENDPOINT, data).subscribe
    (response => {
      this.createResponse = "Entidad creada";
      console.log(response.status);
    });
  }

  deleteProduct(event) {
    const data = [[this.currentRol[0]]]
    console.log(data);
    this.http.delete<any>(this.ENDPOINT, { params: {"barcode": this.currentRol[0]}})
    .subscribe(response => {
      this.deleteResponse = "Entidad borrada";
      console.log(response.status);
    })
  }

}

