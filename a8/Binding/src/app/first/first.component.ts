import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  @Input('str1') str1: any
  constructor() { }
  str: any
  str2 = "Message from Child Component - 1";
  str5:any
  str6="Message From Child Component - 1"
  @Output() opToParent = new EventEmitter<any>();
  ngOnInit(): void {
  }
  send(str2:string){
    this.str = str2;
  }
      getVal(str5:any){
    
       if(str5){
         this.str5 = str5;
       }
    }
    sendParent(str6:any){
  
      this.opToParent.emit(str6);
    }
}
