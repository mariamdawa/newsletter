import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {ListPage} from '../list/list';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {
  loginform: FormGroup;
  listPage=ListPage;
  


  constructor(public navCtrl: NavController, private fb:Facebook) {}
    ngOnInit(){
let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.loginform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern(EMAILPATTERN)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      
    });
  }
  onLogin(){
    if (this.loginform.controls.email.errors || this.loginform.controls.password.errors){
        alert('Please enter a valid email or password');
    }
    else{
    
      this.navCtrl.setRoot(this.listPage);
    }
  }
  onLoginFb(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => this.navCtrl.setRoot(this.listPage))
    .catch(e => console.log('Error logging into Facebook', e));
  
  }
}
  
  
    
