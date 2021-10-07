import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExercisesComponent } from './exercises/exercises.component';

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

@NgModule({
  declarations: [
    HomeComponent,
    ExercisesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(trainingRoutes)
  ]
})
export class TrainingsModule {}
