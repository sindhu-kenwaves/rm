import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { Data } from '../../providers/data';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  program : string;
  points : number;
  expdate : string;
  created : DateTime;

  public myprograms = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public dataService: Data) {
    this.dataService.getMyprograms().then((myprograms) => {
      if (myprograms) {
        this.myprograms = JSON.parse(myprograms);
      }
    });
  }

  saveItem(){
    console.log(this.expdate, this.program);
    let newItem = { 
      program : this.program,
      points : this.points,
      expdate : this.expdate,
      created : new Date()
    };
    this.view.dismiss(newItem);
  }

  close () {
    this.view.dismiss();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AddItemPage');
  // }

}
