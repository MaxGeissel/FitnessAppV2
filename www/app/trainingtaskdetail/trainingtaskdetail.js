import {Page, NavParams, NavController} from 'ionic/ionic';
import {HistoryData} from '../data/data';

@Page({
  templateUrl: 'app/trainingtaskdetail/trainingtaskdetail.html'
})
export class TrainingTaskDetail {
  constructor(params:NavParams, historyData:HistoryData){
    this.choosedTask = params.get('choosedTask');
    this.sets = this.choosedTask.sets;
    this.historySets = historyData.historySets;
    console.log("History Sets");
    console.log(this.historySets);
  }
}
