import {App, Platform, StatusBar} from 'ionic/ionic';
import {TabsPage} from './tabs/tabs';
import {TrainingData} from './data/data';
import {HistoryData} from './data/data';
import './app.scss';

@App({
  template: '<ion-nav [root]="root"></ion-nav>',
  providers: [TrainingData,HistoryData]
})
export class TabsPage {
  constructor(platform: Platform) {
    this.platform = platform;
    this.root = TabsPage;

    this.platform.ready().then(() => {
      console.log('Platform ready');
      StatusBar.setStyle(StatusBar.DEFAULT);
    });
  }
}
