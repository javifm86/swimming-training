import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Category } from '../models/category.model';

@Injectable()
export class CategoriesEntityService extends EntityCollectionServiceBase<Category> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Categories', serviceElementsFactory);
  }
}
