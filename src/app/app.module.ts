import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonsModule, CarouselModule } from 'ngx-bootstrap';
import { SlideshowComponent } from './modules/slideshow/slideshow.component';
import { MyMonitoringService } from './MyMonitoringService';
import { BaseComponent } from './monitor.base.component';
import { EssaysComponent } from './essays/essays.component';
import { SeniorProjectComponent } from './senior-project/senior-project.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactInformationComponent,
    SlideshowComponent,
    BaseComponent,
    EssaysComponent,
    SeniorProjectComponent,
  ],
  providers: [MyMonitoringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
