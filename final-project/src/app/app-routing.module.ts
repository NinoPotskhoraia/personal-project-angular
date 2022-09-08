import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './core/auth/guards/auth.guard';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/auth/auth.module').then((res) => res.AuthModule),
  },
  {
    path: 'hero',
    loadChildren: () =>
      import('./features/hero/hero.module').then((m) => m.HeroModule),
    canLoad: [AuthorizedGuard],
  },
  {
    path: 'todo',
    loadChildren: () =>
      import('./features/todoList/to-do-list.module').then(
        (m) => m.ToDoListModule
      ),
    canLoad: [AuthorizedGuard],
  },
  {
    path: 'sm',
    loadChildren: () =>
      import('./features/smForm/sm.module').then((m) => m.SmModule),
    canLoad: [AuthorizedGuard],
  },
  {
    path: 'pa',
    loadChildren: () =>
      import('./features/paLog/pa.module').then((m) => m.PAModule),
    canLoad: [AuthorizedGuard],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
