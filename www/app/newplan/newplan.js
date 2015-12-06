import {Page,NavController} from 'ionic/ionic';
import {NewTrainingDay} from '../newplan/newtrainingday';

@Page({
  templateUrl:'app/newplan/newplan.html'
})
export class NewPlan{
  constructor(nav:NavController)
  {
    this.nav = nav;
  }

  newTrainingDay(){
    this.nav.push(NewTrainingDay,{});
  }
}
