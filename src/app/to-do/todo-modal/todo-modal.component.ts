import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.css']
})
export class TodoModalComponent implements OnInit {
  @Input() user : any;
  
  constructor() { }

  ngOnInit() {
  }

}
