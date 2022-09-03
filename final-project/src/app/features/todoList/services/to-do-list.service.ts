import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, catchError, of } from 'rxjs';
import { ITask, ITaskValue } from '../interfaces/to-do-list-interface';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000';

  completed = new BehaviorSubject(false);

  postTask(task: ITaskValue) {
    return this.http.post<ITaskValue>(this.baseUrl + '/tasks', task).pipe(
      catchError((e) => {
        console.log(e.message);
        return of([]);
      })
    );
  }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.baseUrl + '/tasks').pipe(
      catchError((e) => {
        console.log(e.message);
        return of([]);
      })
    );
  }

  updateTask(updatedTask: ITask, id: number) {
    return this.http
      .put<ITask>(this.baseUrl + '/tasks/' + id, updatedTask)
      .pipe(
        catchError((e) => {
          console.log(e.message);
          return of([]);
        })
      );
  }

  deleteTask(id: number) {
    return this.http.delete<ITask>(this.baseUrl + '/tasks/' + id).pipe(
      catchError((e) => {
        console.log(e.message);
        return of([]);
      })
    );
  }
}
