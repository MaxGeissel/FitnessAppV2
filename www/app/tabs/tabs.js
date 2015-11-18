import {Page} from 'ionic/ionic';
import {Dash} from '../dash/dash';
import {Trainings} from '../trainings/trainings';
import {Account} from '../account/account';

@Page({
  templateUrl: 'app/tabs/tabs.html',
})
export class TabsPage {
  constructor() {
    this.DashRoot = Dash;
    this.TrainingRoot = Trainings;
    this.AccountRoot = Account;
  }
}
