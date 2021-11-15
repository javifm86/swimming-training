import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Exercise } from "../models/exercise.model";

@Injectable()
export class ExerciseDataService extends DefaultDataService<Exercise> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Exercise', http, httpUrlGenerator);
  }

  getAll(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>('/api/exercises').pipe(map((res) => res));
  }
}
