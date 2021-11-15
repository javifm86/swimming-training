import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { ExerciseEntityService } from './exercise-entity.service';

@Injectable()
export class ExercisesResolver implements Resolve<boolean> {
  constructor(private exercisesService: ExerciseEntityService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const loadExercises = (subscriber: Subscriber<boolean>) => {
      this.exercisesService.loading$
        .pipe(
          filter((loading) => !loading),
          first()
        )
        .subscribe({
          next: (loading) => {
            subscriber.next(true);
            subscriber.complete();
          }
        });
      this.exercisesService.getAll();
    };

    const resolve$ = new Observable<boolean>((subscriber) => {
      this.exercisesService.loaded$
        .pipe(
          tap((entitiesLoaded) => {
            if (!entitiesLoaded) {
              loadExercises(subscriber);
            } else {
              subscriber.next(true);
              subscriber.complete();
            }
          })
        )
        .subscribe();
    });

    return resolve$;
  }
}
