import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  @Input('str2') str2: any
  constructor() { }
  str: any
  str3 = "Message from Child Component - 2";
  str4: any
  str5="Message From Child Component - 2"
  @Output() opToParent = new EventEmitter<any>();
  ngOnInit(): void {
  }
  send(str3:string){
    this.str = str3;
  }
  getVal(str4:any){
   
       if(str4){
         this.str4 = str4;
       }
    }
    sendParent(str5:any){
  
      this.opToParent.emit(str5);
    }
}
