import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-try',
  templateUrl: './directive-try.component.html',
  styleUrls: ['./directive-try.component.css']
  /*styles:[`
  .addColor{
    color:white
  }
  `]*/
})
export class DirectiveTry {
  displayText=false;
  buttonClick=[];
  constructor() { }
  count=0;

  onClickButton(){
    this.displayText= ! this.displayText;
    this.buttonClick.push(this.count++);
  }

}
