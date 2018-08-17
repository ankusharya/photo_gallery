import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // the code to get directory goes here
  getDirectories(){
    return ["watefall","mountain","waves","clouds"]
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

}
