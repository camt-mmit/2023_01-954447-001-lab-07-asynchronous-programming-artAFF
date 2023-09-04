import { Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileViewPageComponent } from './pages/profile-view-page/profile-view-page.component';
import { ProfileFormPageComponent } from './pages/profile-form-page/profile-form-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      { path: 'view', component: ProfileViewPageComponent },
      { path: 'form', component: ProfileFormPageComponent },
    ],
  },
];
