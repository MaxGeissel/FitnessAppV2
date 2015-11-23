import {TrainingDay} from '../data/TrainingDay';
import {Task} from '../data/Task';
import {Set} from '../data/Set';
import {HistorySet} from '../data/HistorySet';

export class TrainingData {
  constructor() {
    this.sets:Array<Set>;
    this.sets = [new Set(10,10),new Set(10,10)];
    this.sets2:Array<Set>;
    this.sets2 = [new Set(10,10),new Set(10,10),new Set(10,10)];
    this.brustBizepsTasks:Array<Task>;
    this.brustBizepsTasks = [new Task(1,"Schrägbankdrücken",this.sets),new Task(2,"Hanteln",this.sets2)];

    this.trainingDays  = [new TrainingDay(1,"Brust Bizeps",this.brustBizepsTasks)];
  }
}

export class HistoryData{
  constructor()
  {
    this.historySets =
    [
      new HistorySet("26.10.2015",10,10),
      new HistorySet("02.11.2015",9,10),
      new HistorySet("09.11.2015",10,10),
      new HistorySet("16.11.2015",12,10),
      new HistorySet("23.11.2015",12,10),
      new HistorySet("25.11.2015",10,10)
    ];
  }
}
