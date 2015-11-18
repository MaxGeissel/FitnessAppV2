import {TrainingDay} from '../data/trainingDay';
import {Task} from '../data/task';

export class TrainingData {
  constructor() {
    this.trainingDays  = [{
      id: 0,
      description: 'Brust Bizeps'
    },{
      id: 1,
      description: 'Schulter Trizeps'
    }];
  }
}

export class Trainings{
  constructor()  {
  }

  getDayTrainings () {
    var dayTasks:any[] = [new TrainingDay(new Task(1,"Schrägbankdrücken",2,10))];
    return dayTasks;
  }
}
