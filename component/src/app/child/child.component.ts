import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('sname') name:any
 
  @Output() opToParent = new EventEmitter<any>();

   constructor() { }

  ngOnInit(): void {
  }
  Send(selected:any){
    //console.log(selected);
    this.opToParent.emit(selected);
  }
 
}
