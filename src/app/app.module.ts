import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { DataTableDemo1 } from './demo1/data-table-demo1';
import { PaginationModule } from 'ngx-bootstrap';
import { DataTableModule } from './data-table';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataTableDemo1Remote } from './demo1/data-table-demo1-remote';



@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    DataTableDemo1,
    DataTableDemo1Remote ,
  ],
  imports: [
    BrowserModule,
    BrowserModule, CommonModule, FormsModule, DataTableModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
