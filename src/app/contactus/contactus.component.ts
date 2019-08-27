import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  getName='';
  getEmail='';
  getMsg='';
   onSubmit(data:NgForm){
      console.log(data.value)
      this.apiservice.insertData(data.value).subscribe((response)=>{
        console.log(response)
        alert('Successfully inserted')
      })


    //  this.getName=data.value.name;
    //  this.getEmail=data.value.email;
    //  this.getMsg=data.value.msg;
    //  console.log(this.getName)
    //  console.log(this.getEmail)
    //  console.log(this.getMsg)
   }

  constructor(private apiservice:ApiserviceService) { }

  ngOnInit() {
  }

}
