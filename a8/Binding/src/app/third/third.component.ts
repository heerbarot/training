import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  @Input('str3') str3: any
  str4="Message From Child Component - 3"
 
  @Output() opToParent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  sendParent(str4:any){
  
    this.opToParent.emit(str4);
  }
}

