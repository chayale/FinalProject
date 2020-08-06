import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class BusinessService {
    constructor( private httpClient:HttpClient){
      
    }

    getBusinessList():Observable<any>{
     return this.httpClient.get<any>(`${environment.BASE_URL}/Business`)
     
    }
  }  