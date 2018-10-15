import { Component, OnInit } from '@angular/core';
import { imageWithText } from '../models/imageWithText.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.less']
})
export class AboutMeComponent implements OnInit {
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
