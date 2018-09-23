import { Component, OnInit } from '@angular/core';
import { imageWithText } from '../models/imageWithText.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.less']
})
export class AboutMeComponent implements OnInit {

  slides: imageWithText[] = [
    { 'imagePath': 'assets/images/homeSlideshow/20150806_124428.jpg', 'imageTitle': 'asd', 'imageText': 'Here is some test text.'},
    { 'imagePath': 'assets/images/homeSlideshow/20150806_153920.jpg', 'imageTitle': 'asd', 'imageText': 'Here is some more test text.'},
    { 'imagePath': 'assets/images/homeSlideshow/20150806_163130.jpg', 'imageTitle': 'asd', 'imageText': 'The third image in the carousel.'},
    { 'imagePath': 'assets/images/homeSlideshow/20150806_165528.jpg', 'imageTitle': 'asd', 'imageText': 'The final image.'},
    { 'imagePath': 'assets/images/homeSlideshow/bgpaper.jpg', 'imageTitle': 'Background', 'imageText': 'Here is some test text.'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
