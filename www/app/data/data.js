import {Storage, SqlStorage, IonicPlatform} from 'ionic/ionic';
import {TrainingDay} from '../data/TrainingDay';
import {Task} from '../data/Task';
import {Set} from '../data/Set';
import {HistorySet} from '../data/HistorySet';

declare function require(name: string): any;
let PouchDB = require('pouchdb');

export class TrainingData {
  constructor() {
    this.db = new PouchDB('trainingdata');

    this.sets:Array<Set>;
    this.sets = [new Set(10,10,1),new Set(10,10,1)];
    this.sets2:Array<Set>;
    this.sets2 = [new Set(10,10,1),new Set(10,10,1),new Set(10,10,1)];
    this.brustBizepsTasks:Array<Task>;
    this.brustBizepsTasks = [new Task(1,"Schrägbankdrücken",this.sets),new Task(2,"Hanteln",this.sets2)];
    this.trainingDays  = [new TrainingDay(1,"Brust Bizeps",this.brustBizepsTasks)];

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

export class LocalStorage{
  constructor(){
    this.storage = new Storage(SqlStorage);
  }

  setValue(key:string,value:any){
    this.storage.set(key,value);
  }

  getValue(key:string){
    this.storage.get(key).then(value =>{
      return value;
    })
  }

  getValues(operator:string,table:string,?where:string,?is:string)
  {
    withWhere = 'select' + operator + 'from' + table + 'where' + where + '=' is;
    withoutWhere = 'select' + operator + 'from' + table;
    if(where != null)
    {
      return this.storage.query(withWhere);
    }
    else {
      return this.storage.query(withoutWhere);
    }
  }
}
