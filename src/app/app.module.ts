import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { PaginationModule } from 'ngx-bootstrap';
import { DataTableModule } from './data-table';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { TodoModalComponent } from ' ./todo-modal/todo-modal.component';
import { TodoModalComponent } from './to-do/todo-modal/todo-modal.component';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    TodoModalComponent ,
  ],
  imports: [
    BrowserModule,
    BrowserModule, CommonModule, FormsModule, DataTableModule,HttpModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
