import {Page} from 'ionic/ionic';
import {Dash} from '../dash/dash';
import {Trainings} from '../trainings/trainings';
import {Config} from '../config/config';

@Page({
  templateUrl: 'app/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    this.DashRoot = Dash;
    this.TrainingRoot = Trainings;
    this.ConfigRoot = Config;
  }
}
