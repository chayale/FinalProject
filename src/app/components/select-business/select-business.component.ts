import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/shared/models/business';
import { BusinessService } from 'src/app/shared/services/business.services';




@Component({
  selector: 'app-select-business',
  templateUrl: './select-business.component.html',
  styleUrls: ['./select-business.component.scss'],
})
export class SelectBusinessComponent implements OnInit {

  
  businessList:Business[]=[]
  currentModal:any=null
  constructor(private bussinessService:BusinessService) { }

  ngOnInit() {}

  loadBusinesses(){
    this.bussinessService.getBusinessList()
    .subscribe((res)=>{this.businessList=res,
    console.log('business',res)})
  }
 
}
