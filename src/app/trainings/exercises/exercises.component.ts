import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../models/category.model';
import { Exercise } from '../models/exercise.model';
import { CategoriesEntityService } from '../services/categories-entity.service';
import { ExerciseEntityService } from '../services/exercise-entity.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  exercises$: Observable<Exercise[]>;
  categories$: Observable<Category[]>;
  error$: Observable<boolean>;

  constructor(
    private exercisesService: ExerciseEntityService,
    private categoriesService: CategoriesEntityService
  ) {
    this.exercises$ = of([]);
    this.categories$ = of([]);
    this.error$ = of(false);
  }

  ngOnInit(): void {
    this.exercises$ = this.exercisesService.entities$;
    this.categories$ = this.categoriesService.entities$;
    this.error$ = this.exercisesService.errors$.pipe(map((err)=>true));

    // this.loadedExercises$.subscribe();

    // this.loading$ = this.exercisesService.loading$;

    /* .pipe(
      map((courses) =>
        courses.filter((course) => course.category === 'BEGINNER')
      )
    ); */
  }
}
