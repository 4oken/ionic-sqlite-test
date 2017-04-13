import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SqlStorage } from '../../services/sqlite'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private storage: SqlStorage) {
    this.value = "hoge"
  }

  value: string

  click(){
    try{
    this.value = "joke"
    this.storage.remove("test")
    this.storage.set("test", "test2")
    this.storage.get("test").then((x) => this.value = x)
    }catch(e){
      alert(e)
    }
  }
}
