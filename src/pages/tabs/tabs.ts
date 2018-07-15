import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ChartPage } from '../chart/chart';
import { LocatePage } from '../locate/locate';

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
