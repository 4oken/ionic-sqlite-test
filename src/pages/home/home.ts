import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SqlStorage } from '../../services/sqlite'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private storage: SqlStorage) {
    this.values = []
  }

  value: string
  values: string[]
  pushKey: string
  pushValue: string

  click(){
    try{
      this.storage.getAll()
        .then((data) => this.values = data)
        .then(() => this.value = this.values[0])
    }catch(e){
      alert(e)
    }
  }
  
  push(){
    this.storage.set(this.pushKey, this.pushValue)
    .then(() => this.click())
    .then(() => {
      this.pushKey = ""
      this.pushValue= ""
    })
  }

  delete(){
    this.storage.remove()
      .then(() => this.values = [])
  }
}
