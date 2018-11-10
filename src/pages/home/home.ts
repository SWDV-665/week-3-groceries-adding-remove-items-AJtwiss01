import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ToastController } from "ionic-angular";
import { AlertController } from 'ionic-angular';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  title = "Groceries Home ";
  items = [
    {
      name: "Milk",
      quanity: 3,
      price: 3
    },
    {
      name: "Eggs",
      quanity: 3,
      price: 3
    },
    {
      name: "Bacon",
      quanity: 3,
      price: 3
    },
    {
      name: "Pancakes",
      quanity: 3,
      price: 3
    }
  ];

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {}
  
  showItemPrompt(){
    let alert = this.alertCtrl.create({
      title: 'Add Item',
      message: 'Please enter Item ..',
      inputs: [
        {
          name: 'name',
          placeholder: 'name'
        },
        {
          name: 'quanity',
          placeholder: 'quanity',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('login clicked + '+ JSON.stringify(item))
            this.items.push(item)
          }
        }
      ]
    });
    alert.present();
  }
  addItem(){
    console.log('its being added')
    this.showItemPrompt()
  }
 
  removeItem(item, index) {

    let toast = this.toastCtrl.create({
      message: 'Remoiving Item - ' + item.name+ '....',
      duration: 3000,
      position: "top"
    });

    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    });

    toast.present();
    this.items.splice(index, 1)
  }
}
