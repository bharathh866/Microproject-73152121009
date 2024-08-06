

import { Injectable } from '@angular/core';
import { Customer } from './model/Customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url:string;
  customer:Customer;
  customerArr:Customer[]
  constructor(private http:HttpClient) { 
    this.url="http://localhost:3004/customers";
    this.customer=new Customer();
    this.customerArr=[];
  }

  insertCustomer(customer:Customer){

    this.http.post(this.url,customer).subscribe();
    return "Customer Details Added";
  }

  updatecustomer(customer:Customer){

    this.http.put(this.url+"/"+customer.id,customer).subscribe();
    return "Customer  Details Updated";
  }
  deletecustomer(cusId:number){
    this.http.delete(this.url+"/"+cusId).subscribe();
    return "Customer Details Deleted";
  }

  findcustomer(cusId:number){
    this.http.get<Customer>(this.url+"/"+cusId).subscribe(data =>this.customer=data);
    return this.customer;
  }

  findAllcustomer(){
    this.http.get<Customer[]>(this.url).subscribe(data =>this.customerArr=data);
    return this.customerArr;
  }
}