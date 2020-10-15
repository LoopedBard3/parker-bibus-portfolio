import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { ProjectsComponent } from './projects/projects.component';
import { EssaysComponent } from './essays/essays.component';
import { SeniorProjectComponent } from './senior-project/senior-project.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent, data: { state: 'home' } },
  { path: 'about', component: AboutMeComponent, data: { state: 'about' } },
  { path: 'contact', component: ContactInformationComponent, data: { state: 'contact'}},
  { path: 'projects', component: ProjectsComponent, data: { state: 'projects'}},
  { path: 'essays', component: EssaysComponent, data: { state: 'essays'}},
  { path: 'senior', component: SeniorProjectComponent, data: { state: 'senior'}},
  { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
  useHash: true
});

