import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from '../../interfaces/to-do-list-interface';
import { ToDoListService } from '../../services/to-do-list.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompletedComponent implements OnInit {
  constructor(private todoService: ToDoListService) {}

  @Input() completedTasks: BehaviorSubject<ITask[]> = new BehaviorSubject(
    [] as ITask[]
  );

  completed = new BehaviorSubject(false);

  ngOnInit(): void {
    this.completed = this.todoService.completed;
  }
}
