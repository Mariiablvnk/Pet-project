import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Pets } from '../models/pets';
import { PetsService } from './pets.service';

@Injectable({
  providedIn: 'root'
})
export class PetsResolver implements Resolve<Pets> {
  constructor(private petsService: PetsService, private router: Router) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pets> | any  {
    return this.petsService.getPet(route.params?.['id']).pipe(
      catchError((err: any) => {
        this.router.navigate(['pets']);
        return err;
      })
    )
  }
}
