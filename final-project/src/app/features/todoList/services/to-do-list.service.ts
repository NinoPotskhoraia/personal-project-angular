import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITaskValue } from '../interfaces/to-do-list-interface';
import {
  addDoc,
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  constructor(public firestore: Firestore) {}
  public data: any = [];
  tasksSubject: BehaviorSubject<any[]> = new BehaviorSubject([] as any[]);

  completed = new BehaviorSubject(false);

  postTask(task: ITaskValue) {
    const dbInstance = collection(this.firestore, 'tasks');
    addDoc(dbInstance, task).then(
      () => {
        console.log('data sent');
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  getTasks() {
    const dbInstance = collection(this.firestore, 'tasks');
    getDocs(dbInstance)
      .then((res) => {
        this.data = [
          ...res.docs.map((item) => {
            return { ...item.data(), id: item.id };
          }),
        ];
        this.tasksSubject.next(this.data);
      })
      .catch((err) => console.log(err.message));
  }

  updateTask(updatedTask: object, id: number) {
    const dataToUpdate = doc(this.firestore, 'tasks', id.toString());
    updateDoc(dataToUpdate, updatedTask)
      .then(() => {
        console.log('data updated');
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  deleteTask(id: number) {
    const dataToDelete = doc(this.firestore, 'tasks', id.toString());
    deleteDoc(dataToDelete)
      .then(() => {
        console.log('data deleted');
      })
      .catch((err) => {
        alert(err.message);
      });
  }
}
