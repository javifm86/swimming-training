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
import { ExerciseDataService } from './services/courses-data.service';

export const trainingRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'exercises',
    component: ExercisesComponent
  }
];

const entityMetadata: EntityMetadataMap = {
  Exercise: {
    // sortComparer: compareCourses,
    entityDispatcherOptions: {
      optimisticUpdate: true
    }
  }
};

@NgModule({
  declarations: [HomeComponent, ExercisesComponent],
  imports: [CommonModule, RouterModule.forChild(trainingRoutes)],
  providers: [ExerciseEntityService, ExerciseDataService]
})
export class TrainingsModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private exerciseDataService: ExerciseDataService
  ) {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Exercise', exerciseDataService);
  }
}
