import { ParentComponent } from './parent/parent.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template:
     `<app-parent></app-parent> 
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component';
}
