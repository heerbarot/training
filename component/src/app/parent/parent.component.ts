import { ChildComponent } from './../child/child.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
   styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  ChildCurrentVal: any 
  constructor() { }

  ngOnInit(): void {
  }
  name: any;
  emp = ['abc', 'xyz', 'pqr']
  setName(emp:string){
    this.name = emp;
  }
  
  GetVal(event:any){
  //  console.log("hello",event);
     if(event){
       this.ChildCurrentVal = "Value received from child : " + event;
     }
  }
}
