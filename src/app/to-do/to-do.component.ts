import { Component, OnInit } from "@angular/core";
import { DataTableResource } from '../data-table';
import persons from './to-do-data';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
@Component({
  selector: "app-to-do",
  templateUrl: "./to-do.component.html",
  styleUrls: ["./to-do.component.css"]
})
export class ToDoComponent implements OnInit {
  
  itemResource = new DataTableResource(persons);
  items = [];
  itemCount = 0;
  public user : any;
  public modalRef: BsModalRef; // {1}


  constructor(private modalService: BsModalService) {
      this.itemResource.count().then(count => this.itemCount = count);
  }
  public template:TemplateRef<any>;
  public openModal(template,rowEvent) {
    this.modalRef = this.modalService.show(template); // {3}
    this.user= rowEvent.row.item.name;
  }
  reloadItems(params) {
      this.itemResource.query(params).then(items => this.items = items);
  }

  // special properties:

  rowClick(rowEvent) {
      console.log('Clicked: ' + rowEvent.row.item.name);
    
  }

  rowDoubleClick(rowEvent) {
      alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item) { return item.jobTitle; }
  ngOnInit() {
  }
}
