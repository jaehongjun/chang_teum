import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ChartPage } from '../chart/chart';
import { LocatePage } from '../locate/locate';
import {IonicPage} from "ionic-angular";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LocatePage;
  tab3Root = ContactPage;
  tab4Root = ChartPage;
  constructor() {

  }
}
