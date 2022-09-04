import { ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { ITask, ITaskValue } from '../../interfaces/to-do-list-interface';
import { ToDoListService } from '../../services/to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListComponent implements OnDestroy {
  constructor(private todoService: ToDoListService) {}

  subscriptions: Subscription[] = [];

  description = new FormControl('', Validators.required);
  tasksSubject: BehaviorSubject<ITask[]> = new BehaviorSubject([] as ITask[]);
  completedTasks: BehaviorSubject<ITask[]> = new BehaviorSubject([] as ITask[]);
  tasksArr: ITask[] = [];
  selectedTaskId: BehaviorSubject<number> = new BehaviorSubject(0);
  showPercent = new BehaviorSubject(false);
  updating = new BehaviorSubject(false);

  get desc(): string {
    return this.description.value;
  }

  public onAddClick() {
    this.subscriptions.push(
      this.todoService
        .postTask({ description: this.desc } as ITaskValue)
        .subscribe()
    );

    setTimeout(() => {
      this.subscriptions.push(
        this.todoService
          .getTasks()
          .pipe(tap((res) => this.tasksSubject.next(res)))
          .subscribe()
      );

      this.description.reset();
    }, 100);
  }

  selectTask(task: ITask) {
    this.selectedTaskId.next(task.id);
    this.updating.next(true);
  }

  update() {
    let updatedTask = { description: this.desc } as ITask;
    this.subscriptions.push(
      this.todoService
        .updateTask(updatedTask as ITask, this.selectedTaskId.value)
        .subscribe()
    );
    setTimeout(() => {
      this.subscriptions.push(
        this.todoService
          .getTasks()
          .pipe(tap((res) => this.tasksSubject.next(res)))
          .subscribe()
      );
      this.description.reset();
      this.updating.next(false);
    }, 200);
  }

  delete(id: number) {
    this.todoService.deleteTask(id).subscribe();
    setTimeout(() => {
      this.subscriptions.push(
        this.todoService
          .getTasks()
          .pipe(tap((res) => this.tasksSubject.next(res)))
          .subscribe()
      );
    }, 100);
  }

  complete(task: ITask) {
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
    }, 200);
  }

  getStatus() {
    this.showPercent.next(true);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((element) => element.unsubscribe());
  }
}
