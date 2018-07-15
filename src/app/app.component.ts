import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyDUN22x4B43_Es8fimX_7oNtBJ1Elrl29E",
  authDomain: "chang-teum.firebaseapp.com",
  databaseURL: "https://chang-teum.firebaseio.com",
  projectId: "chang-teum",
  storageBucket: "chang-teum.appspot.com",
  messagingSenderId: "27231619735"
};
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      firebase.initializeApp(config);
    });
  }
}
