import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  insertData(data){
    return this.http.post("http://localhost:3000/readapi",data);
  }
  getData(){
    return this.http.get("http://localhost:3000/getdatas")
  }


}


