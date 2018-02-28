import { Component, OnInit , Input } from '@angular/core';
import { debug } from 'util';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.css']
})
export class TodoModalComponent implements OnInit {
  @Input() requestId : any;
  
  constructor() { }

  ngOnInit() {
    var id = this.requestId;
    var x = document.getElementById('LoadURL');
    x.innerHTML = "<iframe style='width: 100%;min-height: 600px;;' src=\"http://utc-trsry-app.itworx.com/protected_crest/PopUps/ViewCancelledRequest.aspx?CFID="+id + "\"></iframe>";
  }

}
