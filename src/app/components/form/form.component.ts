import { Component, OnInit } from '@angular/core';
import { AreaRange } from 'src/app/shared/models/area-range';
import { TimeRange } from 'src/app/shared/models/time-range';
import { WalkingBy } from 'src/app/shared/models/walking-by';
import { ModalController } from '@ionic/angular';
import { SelectBusinessComponent } from '../select-business/select-business.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  areaRange:AreaRange={"destinationPoint":"","startingPoint":""}
  timeRange:TimeRange={"day":"","endTime":"","startTime":""}
  walkingBy:WalkingBy=WalkingBy.car;

  constructor(
    public modalController: ModalController) { }

  ngOnInit() {}

  saveDetails(){
    console.log('this.areaRange.destinationPoint',this.areaRange.destinationPoint)
    console.log('this.areaRange.startingPoint',this.areaRange.startingPoint)
    console.log('this.timeRange.day',this.timeRange.day)
    console.log('this.timeRange.endTime',this.timeRange.endTime)
    console.log('this.timeRange.startTime',this.timeRange.startTime)
    console.log('this.walkingBy',this.walkingBy)
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SelectBusinessComponent,
      // cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
