import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Component({
  selector: 'app-adminproductos',
  templateUrl: './adminproductos.component.html',
  styleUrls: ['./adminproductos.component.css']
})

export class AdminproductosComponent implements OnInit {
  ENDPOINT = "https://tecbox.herokuapp.com/Products";

  products: any[];
  currentProduct: any = {
    "barcode": 0,
    "nombre": "",
    "desc": "",
    "cant": 0,
    "precio": 0,
    "impuesto": 0,
    "descuento": 0
  }

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
      this.products = message.items;
      console.log(this.products);
      
    });
  }

  selectProduct(event) {
    let bcnum: number = +event.target.attributes.id.nodeValue;
    let i;
    for (i = 0; i < this.products.length; i++) {
      if (this.products[i].barcode == bcnum) {
        this.currentProduct = this.products[i];
        break;
      }
    }
  }

  updateProduct(event) {
    let query = {}
    query["barcode_old"] = this.currentProduct.barcode;
    if(document.getElementById("input1").nodeValue != null) {
        query["barcode_new"] = document.getElementById("input1").nodeValue;
    }
    if(document.getElementById("input2").nodeValue != null) {
      query["Nombre"] = document.getElementById("input2").nodeValue;
    }
    if(document.getElementById("input3").nodeValue != null) {
      query["Desc"] = document.getElementById("input3").nodeValue;
    }
    if(document.getElementById("input4").nodeValue != null) {
      query["Cant"] = document.getElementById("input4").nodeValue;
    }
    if(document.getElementById("input5").nodeValue != null) {
      query["Precio"] = document.getElementById("input5").nodeValue;
    }
    if(document.getElementById("input6").nodeValue != null) {
      query["Impuesto"] = document.getElementById("input6").nodeValue;
    }
    if(document.getElementById("input7").nodeValue != null) {
      query["Descuento"] = document.getElementById("input7").nodeValue;
    }
    
    this.http.put<any>(this.ENDPOINT, query).subscribe
    (response => {
      this.editResponse = "Actualización Exitosa";
    });
    
  }

  createProduct(event) {
    const data = {
      barcode: document.getElementById("get1").nodeName,
      Nombre: document.getElementById("get2").nodeName,
      Desc: document.getElementById("get3").nodeName,
      Precio: document.getElementById("get4").nodeName,
      Impuesto: document.getElementById("get5").nodeName,
      Descuento: document.getElementById("get6").nodeName
    }
    console.log(data);
    this.http.post<any>(this.ENDPOINT, data).subscribe
    (response => {
      this.createResponse = "Entidad creada";
      console.log(response.status);
    });
  }

  deleteProduct(event) {
    const data = {
        barcode: this.currentProduct.barcode
    }
    console.log(data);

    this.http.delete<any>(this.ENDPOINT, { params: {"barcode": this.currentProduct.barcode}})
    .subscribe(response => {
      this.deleteResponse = "Entidad borrada";
      console.log(response.status);
    })
  }

}
