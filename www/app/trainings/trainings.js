import {Page, NavController, ViewController} from 'ionic/ionic';
import {TrainingData} from '../data/data';
import {TrainingTasks} from '../trainingtasks/trainingtasks';

@Page({
  templateUrl: 'app/trainings/trainings.html'
})
export class Trainings {
  constructor(trainingData: TrainingData, nav: NavController) {
    this.nav = nav;
    this.trainingData = trainingData;
    this.trainingDays = this.trainingData.trainingDays;
  }

  chooseTraining(training){
    this.nav.push(TrainingTasks,{
      training: training
    });
  }

}
