import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ITask } from '../../interfaces/to-do-list-interface';
import { ToDoListService } from '../../services/to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListComponent implements OnInit {
  constructor(private todoService: ToDoListService) {}
  ngOnInit(): void {
    this.tasksSubject = this.todoService.tasksSubject;
  }

  subscriptions: Subscription[] = [];

  description = new FormControl('', Validators.required);
  tasksSubject: BehaviorSubject<any[]> = new BehaviorSubject([] as any[]);
  completedTasks: BehaviorSubject<ITask[]> = new BehaviorSubject([] as ITask[]);
  tasksArr: ITask[] = [];
  selectedTaskId: BehaviorSubject<number> = new BehaviorSubject(0);
  showPercent = new BehaviorSubject(false);
  updating = new BehaviorSubject(false);

  get desc(): string {
    return this.description.value;
  }

  public onAddClick() {
    this.todoService.postTask({ description: this.desc });

    setTimeout(() => {
      this.todoService.getTasks();

      this.description.reset();
      this.showPercent.next(false);
    }, 400);
  }

  public selectTask(task: ITask): void {
    this.selectedTaskId.next(task.id);
    this.updating.next(true);
  }

  public update(): void {
    let updatedTask = { description: this.desc };

    this.todoService.updateTask(updatedTask, this.selectedTaskId.value);
    setTimeout(() => {
      this.todoService.getTasks();
      this.description.reset();
      this.updating.next(false);
    }, 400);
  }

  public delete(id: number): void {
    this.todoService.deleteTask(id);
    setTimeout(() => {
      this.todoService.getTasks();
    }, 400);
  }

  public complete(task: ITask): void {
    this.todoService.completed.next(true);
    this.tasksArr.push(task);
    this.completedTasks.next(this.tasksArr);
    this.delete(task.id);
    setTimeout(() => {
      if (
        this.completedTasks.value.length &&
        this.tasksSubject.value.length === 0
      ) {
        this.getStatus();
      }
    }, 600);
  }

  public getStatus(): void {
    this.showPercent.next(true);
  }
}
