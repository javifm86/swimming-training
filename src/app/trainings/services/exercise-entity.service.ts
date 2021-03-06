import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Exercise } from '../models/exercise.model';

@Injectable()
export class ExerciseEntityService extends EntityCollectionServiceBase<Exercise> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Exercise', serviceElementsFactory);
  }
}
