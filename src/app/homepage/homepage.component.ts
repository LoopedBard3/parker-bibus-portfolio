import { Component, OnInit } from '@angular/core';
import { imageWithText } from '../models/imageWithText.model';
import { AppInsightsService } from 'microsoft-applicationinsights-angular5';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['../app.component.less']
})
export class HomepageComponent implements OnInit {

  slides: imageWithText[] = [
    { 'imagePath': 'assets/images/homeSlideshow/20150806_124428.jpg', 'imageTitle': 'asd', 'imageText': 'Here is some test text.'},
    { 'imagePath': 'assets/images/homeSlideshow/20150806_153920.jpg', 'imageTitle': 'asd', 'imageText': 'Here is some more test text.'},
  ];

  constructor(private logger: AppInsightsService) {
    this.logger.logEvent('homepage visited');
  }
  ngOnInit() { }
}
