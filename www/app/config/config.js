import {Page,NavController} from 'ionic/ionic';
import {NewPlan} from '../newplan/newplan';

@Page({
  templateUrl:'app/config/config.html'
})
export class Config{
  constructor(nav:NavController)
  {
    this.nav = nav;
  }

  newPlan(){
    this.nav.push(NewPlan,{});
  }
}
