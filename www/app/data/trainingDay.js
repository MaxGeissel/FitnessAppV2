//TrainingDay holds the different tasks for one Day.
export class TrainingDay{
  constructor(id:number,description:string,tasks:Array<Task>){
    this.id = id;
    this.description = description;
    this.tasks = tasks;
  }
  getTasks () {
    return this.tasks;
  }
}
