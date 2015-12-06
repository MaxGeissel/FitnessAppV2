import {Page,NavController} from 'ionic/ionic';
import {NewTrainingDay} from '../newplan/newtrainingday';
import {TrainingDay} from '../data/TrainingDay';

@Page({
  templateUrl:'app/newplan/newplan.html'
})
export class NewPlan{
  public days:Array<TrainingDay>;
  constructor(nav:NavController)
  {
    this.nav = nav;
    this.days = [new TrainingDay(1,"Brust Bizeps",[]),new TrainingDay(2,"Schulter Trizeps",[])];
  }

  newTrainingDay(){
    this.nav.push(NewTrainingDay,{});
  }

  clickItem(item:TrainingDay){
    this.nav.push(NewTrainingDay,{choosedPlan:item});
  }
}
