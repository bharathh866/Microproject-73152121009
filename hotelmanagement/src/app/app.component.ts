import { Component } from '@angular/core';
import { Customer } from './model/Customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  customer: Customer;
  result: string;
  flag:boolean;
  customerArr:Customer[]

  constructor(private service: CustomerService) {
    this.customer = new Customer();
    this.result = '';
    this.flag=false;
    this.customerArr=[]
  }

  insertCustomer(data: any) {
    this.customer.CustomerName = data.customername;
    this.customer.Roomno = data.roomnumber;
  this.customer.AadharNumber = data.aadharnumber;
  this.customer.id=data.cusId;

    this.result = this.service.insertCustomer(this.customer);
  }
  updatecustomer(data: any) {
  
    this.customer.CustomerName =data.customername;
    this.customer.Roomno =data.roomnumber;
    this.customer.AadharNumber =data.aadharnumber;
    this.customer.id=data.cusId;
 
    this.result=this.service.updatecustomer(this.customer);

    }

    deletecustomer(data:any){
      this.result=this.service.deletecustomer(data.cusId);
    }

    findcustomer(data:any){
      this.customer=this.service.findcustomer(data.cusId);
      this.result=this.customer.CustomerName+ " "+this.customer.Roomno+" "+this.customer.AadharNumber;
    }
    findAllcustomer(){
      this.customerArr=this.service.findAllcustomer();
      this.flag=true;
    }
}
