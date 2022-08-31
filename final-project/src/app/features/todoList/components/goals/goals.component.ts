import {
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask, ITaskValue } from '../../interfaces/to-do-list-interface';
import { ToDoListService } from '../../services/to-do-list.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalsComponent {
  constructor() {}
  @Input() vm = {
    description: '',
  };
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() completed = new EventEmitter();

  public onEditClick() {
    this.edit.emit();
  }

  public onDeleteClick() {
    this.delete.emit();
  }

  public complete() {
    this.completed.emit();
  }
}
