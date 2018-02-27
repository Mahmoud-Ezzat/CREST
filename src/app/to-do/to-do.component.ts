import { Component, OnInit,Input } from "@angular/core";
import { DataTableResource } from '../data-table';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { ToDoService } from './to-do.service';
import { debug } from "util";
@Component({
  selector: "app-to-do",
  templateUrl: "./to-do.component.html",
  styleUrls: ["./to-do.component.css"],
  providers:[ToDoService]
})
export class ToDoComponent implements OnInit {
  itemResource = null;
  items = [];
  itemCount = 0;
  public requestId : any;
  public modalRef: BsModalRef; // {1}
  public template:TemplateRef<any>;

  constructor(private modalService: BsModalService, private service:ToDoService) {
      
  }

  ngOnInit() {
    }
  public openModal(template,rowEvent) {
      let modaoptions:any={
        disableClose:true,backdrop: 'static'
      }
    this.modalRef = this.modalService.show(template,modaoptions); // {3}
    this.requestId= rowEvent[1];
  }
  getData(){
    this.service.getData().subscribe(
        a => {
            this.items = a;
            this.itemResource = new DataTableResource(this.items);
            this.itemCount = this.items.length;
            //this.itemResource.count().then(count => this.itemCount = count);
        }
    );
  }
  reloadItems(params) {
    if(this.itemResource != null)
        this.itemResource.query(params).then(items => this.items = items);
    else
    {
        this.service.getData().subscribe(
            a => {
                this.items = a;
                this.itemResource = new DataTableResource(this.items);
                this.itemCount = this.items.length;
                this.itemResource.query(params).then(items => this.items = items);
            }
        );
    }
}

  // special properties:

  rowClick(rowEvent) {
  }

  rowDoubleClick(rowEvent) {
      alert('Double clicked: ' + rowEvent.row.item.name);
  }
  rowTooltip(item) { return item.jobTitle; }
}
