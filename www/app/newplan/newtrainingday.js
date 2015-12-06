import {Page,NavController} from 'ionic/ionic';

@Page({
  templateUrl:'app/newplan/newtrainingday.html'
})
export class NewTrainingDay{
  constructor(nav:NavController)
  {
    this.nav = nav;
  }
}
