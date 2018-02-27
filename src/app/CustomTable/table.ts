import {Http, Response} from '@angular/http';
import {Injectable, Component, Input} from '@angular/core';
 
@Component({
  selector: 'datatable',
  template: './table.html'
})
export class DatatableComponent { 
 
  @Input() InputColumns;
}