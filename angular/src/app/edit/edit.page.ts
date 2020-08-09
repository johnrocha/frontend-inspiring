import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { legends } from '../names/nameslist';


@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage {
  legends: Array<string> = legends;
  legendsList: any = legends;
  name = 'test';

  ngOnInit() {
    
  }

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {  }

  updateLegend(legend){
      
    let index = this.legendsList.indexOf(legend);
    legend.name = "test";
    this.legendsList[index] = legend;
  
    console.log(this.legendsList);
  }

}


