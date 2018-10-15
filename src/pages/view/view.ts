import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { obj } from '../../app/class';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';
import { EmailComposer } from '@ionic-native/email-composer';

import * as firebase from 'firebase';

import { CategoryPage } from '../category/category';



/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
//viewpage Ts\\

export class ViewPage {
  comment: any;
  data: any;
  name;
  downloadurl;
  description;
  downloadurl1;
  downloadurl3;
  key;
  arr = [];
  arr2 = [];
  uid: any
  PicUrl: any;
  url;
  num;
  numComments;
  Comments = [];
  email;
  comments;
  likes;
  like;

  obj: any;
  numlikes;
  viewlike;
  removelike;

  username;
  commentsLeng;
  LikesLeng;
  location;
  numlikes;
  viewComments;
  viewlike
  price
  obj = this.navParams.get("obj");

  constructor(public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider, private emailComposer: EmailComposer) {
    this.obj = this.navParams.get("obj");
    console.log("this is my index");
    console.log(this.email);

    this.username = this.obj.username;
    this.downloadurl = this.obj.pic;
    this.uid = this.obj
    this.key = this.obj.key;
    this.downloadurl1 = this.obj.url

    this.comments = this.obj.comments
    this.email = this.obj.email
    this.numlikes =  this.obj.likes;
    this.removelike= this.obj.likes;

    this.numComments = this.obj.comments;
    this.email = this.obj.email;
    this.name = this.obj.name;
    this.description = this.obj.description;
    this.location = this.obj.location;
    this.price = this.obj.price;
    this.numlikes = this.obj.likes;




    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        console.log(available);
      }
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
    console.log(this.obj);
    this.viewcomments();
  }
  BuyArt() {
    let email = {
      to: this.obj.email,
      cc: 'theantz39@gmail.com',
      attachments: [
        this.downloadurl
      ],
      subject: this.obj.username,
      body: this.obj.pic,
      isHtml: true
    };
    this.emailComposer.open(email);
  }

  GoBackToCategory() {
    this.navCtrl.pop();
  }

  viewcomments(){
    this.art.viewComments(this.obj.key, this.comment).then((data) => {
      console.log(data)
      var keys1: any = Object.keys(data);
      for (var i = 0; i < keys1.length; i++) {
        var key = keys1[i];
        let obj = {
          comment: data[key].comment,
          uid: data[key].uid,
          downloadurl: data[key].url,
          username: data[key].username,
          date: data[key].date
        }
        this.arr2.push(obj);
        console.log(this.arr2);
      }
      console.log("janet");
      this.commentsLeng = this.arr2.length;
      console.log(this.commentsLeng);
    })


  }
  likePic(key) {
    this.art.likePic(this.obj.key,this.num).then((data: any) => {
      this.art.addNumOfLikes(this.obj.key, this.numlikes).then(data => {
        this.art.viewLikes(this.obj.key, this.viewlike).then(data => {
        })
      })
      this.numlikes++;
      console.log(this.numlikes)
    })
  }




  likePic(key,obj) {

  if (this.obj.key) {
    this.art.likePic(this.obj.key).then((data: any) => {
      this.art.addNumOfLikes(this.obj.key, this.numlikes).then (data =>{


      })
  this.art. viewLikes(this.obj.key, this.viewlike).then (data =>{
    
 
   })
   this.numlikes++;
   console.log(this.obj.name)
 })


 }
 else if (key.obj) {
   this.art.removeLike(this.obj.key, this.obj.removelike).then (data =>{
    this.art. viewLikes(this.obj.key, this.viewlike).then (data =>{
    
 
    })
    this.numlikes--;

   })

   
 }

 else{
 
 }
  }
  comLikes(key) {

    if (key.obj) {
      this.art.comLikes(this.obj.key).then((data: any) => {
        this.art.addNumOfLikes(this.obj.key, this.numlikes).then (data =>{
    this.art. viewLikes(this.obj.key, this.viewlike).then (data =>{
      
    })
     })
     this.numlikes++;
   })
  
  
   }
   else if (key.obj) {
    this.art.removeLike(this.obj.key, this.obj.removelike).then (data =>{
     this.art. viewLikes(this.obj.key, this.viewlike).then (data =>{
     
  
     })
     this.numlikes--;
 
    })
 
    
  }
 
  else{
   this.art.addNumOfLikes(this.obj.key, this.numlikes).then (data =>{
 
 
   })
  }
   
  }
  
}







//   else if  (this.PicUrl[key]){
//     let user = firebase.auth().currentUser;
//     this.art.removeLike(this.PicUrl[key].name, this.PicUrl[key].key, this.PicUrl[key].likes).then (data =>{
//      this.ionViewDidLoad();
//      console.log(key)
//     })
//  }
// else{
//   let user = firebase.auth().currentUser;
// this.art.addNumOfLikes(this.key.name, this.key.key, this.PicUrl.key.likes).then (data =>{
// this.ionViewDidLoad();
// console.log(key)
// })


  CommentPic(key) {
    this.art.comments(this.obj.key, this.comment).then((data: any) => {
      this.art.addNumOfComments(this.obj.key, this.numComments).then(data => {
        this.art.viewComments(this.obj.key, this.viewComments).then(data => {
          this.arr2.length = 0;
          this.viewcomments();
        })
      })
      this.numComments++;
      console.log(this.numComments)
    })
    this.comment = "";
  }

}

