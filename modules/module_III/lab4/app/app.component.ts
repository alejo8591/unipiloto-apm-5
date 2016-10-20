import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>{{hello}}</h1>' + '<br /> <h2>{{bye}}</h2>'
})
export class AppComponent {
	hello: string = "hola mundo complicado desde angularJS2";
	bye: string = "más perdido que la mamá del chavo";
}
