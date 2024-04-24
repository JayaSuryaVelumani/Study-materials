import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedTaskComponent } from './completed-task/completed-task.component';



@NgModule({
  declarations: [
    CompletedTaskComponent
  ],
  imports: [
    CommonModule  
  ],
  exports:[
    CompletedTaskComponent
  ]
})
export class TodoModule { }
