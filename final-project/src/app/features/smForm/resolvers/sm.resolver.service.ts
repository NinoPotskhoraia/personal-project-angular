import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ITip } from '../interfaces/sm-interface';
import { SmService } from '../services/sm.service';

@Injectable({ providedIn: 'root' })
export class SMResolver implements Resolve<ITip[][]> {
  constructor(private smService: SmService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ITip[][]> | Promise<ITip[][]> | ITip[][] {
    return this.smService.getTips();
  }
}
