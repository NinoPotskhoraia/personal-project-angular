import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './components/goals/goals.component';
import { CompletedComponent } from './components/completed/completed.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoListRoutingModule } from './to-do-list-routing.module';

@NgModule({
  declarations: [GoalsComponent, CompletedComponent, ToDoListComponent],
  imports: [CommonModule, ToDoListRoutingModule],
})
export class ToDoListModule {}
