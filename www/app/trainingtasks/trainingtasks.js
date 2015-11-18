import {Page, NavParams} from 'ionic/ionic';
import {Trainings} from '../data/data';

@Page({
  templateUrl: 'app/trainingtasks/trainingtasks.html'
})
export class TrainingTasks {
  constructor(params: NavParams, trainings:Trainings) {
    this.training = params.get('description');
    this.trainings = trainings.getDayTrainings(1);
    this.tasks = this.trainings.getTasks();
  }
}
