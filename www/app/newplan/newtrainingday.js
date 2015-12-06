import {Page,NavController,NavParams} from 'ionic/ionic';

@Page({
  templateUrl:'app/newplan/newtrainingday.html'
})
export class NewTrainingDay{
  constructor(nav:NavController,params:NavParams)
  {
    this.nav = nav;
    this.isNewPlan = false;
    this.choosedPlan = params.get('choosedPlan');
    if(this.choosedPlan != null)
      this.isNewPlan = true;
  }

  save(){
    
  }
}
