import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Category } from "../models/category.model";

@Injectable()
export class CategoriesDataService extends DefaultDataService<Category> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Category', http, httpUrlGenerator);
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/cats2').pipe(map((res) => res));
  }
}
