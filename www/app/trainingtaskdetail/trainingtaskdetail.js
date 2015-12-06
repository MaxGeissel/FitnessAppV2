import {Page, NavParams, NavController} from 'ionic/ionic';
import {TrainingData} from '../data/data';

@Page({
  templateUrl: 'app/trainingtaskdetail/trainingtaskdetail.html'
})
export class TrainingTaskDetail {
  constructor(params:NavParams, historyData:HistoryData){
    this.choosedTask = params.get('choosedTask');
    this.sets = this.choosedTask.sets;
    this.historySets = historyData.historySets;
  }
}
