import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppInsightsModule } from 'microsoft-applicationinsights-angular5';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonsModule, CarouselModule } from 'ngx-bootstrap';
import { SlideshowComponent } from './modules/slideshow/slideshow.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    AppInsightsModule.forRoot('c0ee0dc6-88b6-4ed3-8b3c-5d0fc2953433'),
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactInformationComponent,
    SlideshowComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
