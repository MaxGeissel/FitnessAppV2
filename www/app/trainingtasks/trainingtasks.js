import {Page, NavParams, NavController} from 'ionic/ionic';
import {TrainingTaskDetail} from '../trainingtaskdetail/trainingtaskdetail';

@Page({
  templateUrl: 'app/trainingtasks/trainingtasks.html'
})
export class TrainingTasks {
  constructor(params: NavParams, nav:NavController) {
    this.nav = nav;
    this.choosedDay = params.get('choosedDay');
    this.dayTasks = this.choosedDay.tasks;
  }

  chooseTask(task){
    console.log("Goo");
    this.nav.push(TrainingTaskDetail,{
      choosedTask:task
    });
  }
}
