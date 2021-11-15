import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExercisesComponent } from './exercises/exercises.component';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap
} from '@ngrx/data';
import { ExerciseEntityService } from './services/exercise-entity.service';
import { ExerciseDataService } from './services/exercise-data.service';
import { CategoriesDataService } from './services/categories-data.service';
import { CategoriesEntityService } from './services/categories-entity.service';
import { ExercisesResolver } from './services/exercises.resolver';

export const trainingRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'exercises',
    component: ExercisesComponent,
    resolve: {
      courses: ExercisesResolver
    }
  }
];

const entityMetadata: EntityMetadataMap = {
  Exercise: {
    // sortComparer: compareCourses,
    entityDispatcherOptions: {
      optimisticUpdate: true
    }
  },
  Categories: {
    // sortComparer: compareCourses,
    entityDispatcherOptions: {
      optimisticUpdate: true
    }
  }
};

@NgModule({
  declarations: [HomeComponent, ExercisesComponent],
  imports: [CommonModule, RouterModule.forChild(trainingRoutes)],
  providers: [
    ExerciseEntityService,
    ExerciseDataService,
    CategoriesEntityService,
    CategoriesDataService,
    ExercisesResolver
  ]
})
export class TrainingsModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private exerciseDataService: ExerciseDataService,
    private categoriesDataService: CategoriesDataService
  ) {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Exercise', exerciseDataService);
    entityDataService.registerService('Categories', categoriesDataService);
  }
}
