import { Injectable } from '@angular/core';
//este otro modulo tambien es el que nos permite hacer solicitudes a la Api
import { HttpClient } from '@angular/common/http';
import { CreateProductDTO, Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private API = 'https://young-sands-07814.herokuapp.com/api/products'
  constructor(private http: HttpClient) { }

  getAllProducts(){
    //nosotros estamos manejando los productos basados en un modelo que hicimos, por lo tanto para no tener errores
    //debemos indicarle a la peticion que lo que va a obtener es un array de tipo Product, y lo hacemos asi:
    // <Product[]>
    return this.http.get<Product[]>(this.API)
  }

  getProduct(id: string){
    return this.http.get<Product>(`${this.API}/${id}`)
  }

  create(data: CreateProductDTO){
    return this.http.post<Product>(this.API, data) //data representa a los datos enviados por el body a la api
  }
}