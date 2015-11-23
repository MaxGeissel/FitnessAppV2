import {Page, NavController, ViewController} from 'ionic/ionic';
import {TrainingData} from '../data/data';
import {TrainingTasks} from '../trainingtasks/trainingtasks';
import {Task} from '../data/data';

@Page({
  templateUrl: 'app/trainings/trainings.html'
})
export class Trainings {
  constructor(trainingData: TrainingData, nav: NavController) {
    this.nav = nav;
    this.trainingDays = trainingData.trainingDays;
  }

  chooseTraining(training){
    this.nav.push(TrainingTasks,{
      choosedDay:training
    });
  }

}
