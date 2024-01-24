import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProvedorModel } from '../modelo/provedor-model';
import {Observable} from 'rxjs';
import { ResponseModel } from '../modelo/response-model';
@Injectable({
  providedIn: 'root'
})
export class ProvedoresService {

  constructor(private http: HttpClient) { }


  
  public getProvedorById(idProvedor:number): Observable <ResponseModel> {
    let url = 'http://localhost:8080/ecommerceGapsi/obtenerProvedorById/'
     return this.http.get<ResponseModel>(url+idProvedor);
  }

  public altaProvedor(provedor:ProvedorModel): Observable <ResponseModel> {
    let url = 'http://localhost:8080/ecommerceGapsi/altaProvedor'
     return this.http.post<ResponseModel>(url,provedor);
  }

  public eliminarProvedor(idProvedor:ProvedorModel): Observable <ResponseModel> {
    let url = 'http://localhost:8080/ecommerceGapsi/eliminarProvedor'
 
     return this.http.post<ResponseModel>(url,idProvedor);
  }

  public obtenerProvedores(): Observable <ResponseModel> {
    let url = 'http://localhost:8080/ecommerceGapsi/obtenerProvedores'
     return this.http.get<ResponseModel>(url);
  }

}
