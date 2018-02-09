import {Routes} from '@angular/router';

import {AdminComponent} from './layouts/admin/admin.component';
import {AuthComponent} from './layouts/auth/auth.component';

export const AppRoutes: Routes = [ {
  path: '',
  component: AuthComponent,
  children: [
    {
      path: '',
      component: AdminComponent,
      children: [
        {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
        },
        {
          path: 'dashboard',
          loadChildren: './dashboard/dashboard.module#DashboardModule'
        },
      ]
},
    {
      path: 'authentication',
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }
  ]
}, {
  path: '**',
  redirectTo: 'error/404'
}];
