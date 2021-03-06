import { Component, OnInit } from '@angular/core';
import { FirebaseHelper } from '../shared/helpers/firebase.helper';
import { Functions } from '../shared/helpers/functions.helper';
import { DATA }  from '../shared/data';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  Functions = Functions;
  data = {
    page: DATA.pages.page_test,
    form: {}
  };

  auth = false;

  constructor(private service: FirebaseHelper) { }

  ngOnInit() {
    const hierarchy = (this.auth) ? 'user' : 'guest';
    const params = { hierarchy, order: 1 };
    this.getInputs();
  }


  getByIndex(data = [], index: string, value: string | number) {
    return data.filter(item => item[index] == value);
  }

  isForm(type) {
    return ['input', 'select'].includes(type);
  }

  getInputs() {
    const { render } = this.data.page.value.body;
    render.filter(item => 
      this.isForm(item.type))
        .map(item =>  this.data.form[item.value.name] = item.value.value);
  }

  dataNotEmpty() {
    return (this.data.page != null);
  }

  isRender(render: any, type: string) {
    return render.type === type;
  }

  runFuncByString(functionNameString) {
    const namespaces = functionNameString.split(".");
    const functionName = namespaces.pop();
    let context = this.Functions;
    for (let line in namespaces) {
      context = context[namespaces[line]];
    }
    return context[functionName](this);
  }
}
