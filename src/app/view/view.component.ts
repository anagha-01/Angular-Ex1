import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  private myData:Array<object>=[]

  constructor(private apiservice:ApiserviceService) { }

  ngOnInit() {
    this.fetchData();
  }
public fetchData(){
  this.apiservice.getData().subscribe((response:Array<Object>)=>{
    this.myData=response
    console.log(this.myData)
  })
}

}
