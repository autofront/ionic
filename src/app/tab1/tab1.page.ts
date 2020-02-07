import { Component, OnInit } from '@angular/core';
import { FirebaseDatabaseService } from '../shared/services/firebase.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  data = {
    page: null,
    form: null
  };

  auth = false;

  constructor(private db: FirebaseDatabaseService) { }

  ngOnInit() {
    const hierarchy = (this.auth) ? 'user' : 'guest';
    const params = { hierarchy, order: 1 };
    this.getPage(params)
  }


  getByIndex(data = [], index: string, value: string | number) {
    return data.filter(item => item[index] == value);
  }

  getPage({ hierarchy, order }) {
    this.db.list('pages').pipe(take(1)).subscribe(item => {
      let page = this.getByIndex(item, 'hierarchy', hierarchy);
      page = this.getByIndex(item, 'order', order);
      this.data.page = (page.length) ? page[0] : null;
    });
  }
}
