import { createAction, props } from '@ngrx/store';
import { User } from './model/user.model';

export const login = createAction(
  '[Login page] User login from login main page',
  props<{ user: User }>()
);
