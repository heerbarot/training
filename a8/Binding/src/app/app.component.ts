import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binding';
  str: any
  str1 = "Message from Parent";
  str6:any
  
  send(str1:string){
    this.str = str1;
  }
  getVal(str6:any){
    
    if(str6){
      this.str6 = str6;
    }
 }
}
