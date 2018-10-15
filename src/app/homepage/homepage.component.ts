import { Component, OnInit, Input } from '@angular/core';
import { imageWithText } from '../models/imageWithText.model';
import { MyMonitoringService } from '../MyMonitoringService';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['../app.component.less']
})
export class HomepageComponent implements OnInit {
  @Input()
  myMonitoringService: MyMonitoringService;

  slides: imageWithText[] = [
    {
      imagePath: 'assets/images/homeSlideshow/20160901-parker.jpg',
      imageTitle: '',
      imageText: 'Picture of myself.',
    }
  ];

  constructor() {}
  ngOnInit() {}
}
