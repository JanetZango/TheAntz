import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { OrderModalPage } from '../order-modal/order-modal';
import { ViewInforPage } from '../view-infor/view-infor';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';
/**
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {
  private buttonColor: string = "primary"
  username;
  downloadurl;
  keys2;
  downloadurl1;
  email;
  name;
  name1;
  description;
  price;
  location;
  numlikes;
  numComments;
  arr = [];
  tempName;
  uid: any;
  tempdownloadurl;
  tempemail;
  key;
  list = [];
  retriveCustomerDetails = [];
  xxx;
  currentUserId;
  artId;
  tempUid;
  displayCurentMessages = []
  arrMsg = new Array();
  color;
  constructor(public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider) {
    this.getData();
  }

//  ionDidViewEnter(){
//    this.getData();
//  }

  getData() {
    this.displayCurentMessages.length = 0;
    this.art.retriveMessages().then((data:any) =>{
      this.displayCurentMessages.length = 0;
      this.displayCurentMessages =  this.art.getAllConvo();
      console.log(this.displayCurentMessages)
    })
  
  }

  // ionViewDidEnter() {
  //   this.displayCurentMessages.length = 0;
  //   this.retriveCustomerDetails.length = 0;
  //   this.art.getOrders().then((data:any) =>{
  //     this.retriveCustomerDetails = data;
  //     console.log(this.retriveCustomerDetails);
  //     for (var x = 0; x < this.retriveCustomerDetails.length; x++){
  //       this.getData(this.retriveCustomerDetails[x].currentUserId,this.retriveCustomerDetails[x].uid,"", x)
  //     }
  //   })
  // }

  scroll(event) {
    // console.log(event);

  }

  showDetails(downloadurl, tempName, tempdownloadurl, price, name1, email, message, key, currentUserId, uid,path, pic) {
    let obj = {
      downloadurl: downloadurl,
      tempName: tempName,
      tempdownloadurl: tempdownloadurl,
      price: price,
      name1: name1,
      
      email: email,
      message: message,
      key: key,
      uid: uid,
      currentUserId: currentUserId,
      path:path,
      pic : pic
    }

    this.navCtrl.push(ViewInforPage, { obj: obj });
  }


}