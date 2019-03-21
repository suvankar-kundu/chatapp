import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '../../../../../../node_modules/@angular/forms';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';

const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(profileRoutes)
  ],
  declarations: [ProfileComponent,  ConfirmEqualValidatorDirective]
})
export class ProfileModule { }
