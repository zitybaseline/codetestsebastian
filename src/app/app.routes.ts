import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DemoComponent } from './features/demo/demo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'demo', component: DemoComponent },
];