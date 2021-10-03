import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDashboardItems } from './dashboard-items';
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardItemsService {

private _url : string = "/assets/data/dashboard-items.json";

  constructor(private http : HttpClient) { }
getItems(){
  return this.http.get<IDashboardItems[]>(this._url);
}










  // putItems(){
  //   return this.http.put<void>(this._url,);
  // }
}


// return [{id:"1",name:"test1",mobile:"9479435988",email :"tarunmeena512@gmail.com"} ,
// {id:"2",name:"test2",mobile:"1234567890",email :"admin1@gmail.com"}, 
// {id:"3",name:"test3",mobile:"1234512345",email :"admin2@gmail.com"},   
// {id:"4",name:"test4",mobile:"1234554321",email :"admin3@gmail.com"},  
// {id:"5",name:"test5",mobile:"1234515432",email :"admin4@gmail.com"}   
// ];