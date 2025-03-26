import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GestionSiteComponent} from './gestion-site/gestion-site.component';
import {TestGoogleComponent} from './test-google/test-google.component';
import {TestTinyComponent} from './test-tiny/test-tiny.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'site', component: GestionSiteComponent },
  { path: 'tiny', component: TestTinyComponent },
  { path: 'google', component: TestGoogleComponent },
];
