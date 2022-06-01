import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'article-generator-app';
  advice='';
  id='';
  shadow_class=0;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    // this.http.get<any>('https://api.adviceslip.com/advice').subscribe(
    // data => {
    //       // var totalAngularPackages = data.total;
    //       this.advice=data.slip.advice;
    //       this.id=data.slip.id;
    //       console.log(data.slip.advice);
    // })
    this.randomAdvice();
  }
  randomAdvice(){
    this.http.get<any>('https://api.adviceslip.com/advice').subscribe(
    data => {
          // var totalAngularPackages = data.total;
          this.advice=data.slip.advice;
          this.id=data.slip.id;
          console.log(data.slip.advice);
    })
  }
  mouseEnterEvent(){
    console.log("hello");
    this.shadow_class=1;

  }
  mouseLeaveEvent(){
    console.log("bye");
    this.shadow_class=0;
  }
}
