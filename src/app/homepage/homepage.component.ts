import { Component, OnInit } from '@angular/core';
import { imageWithText } from '../models/imageWithText.model';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['../app.component.less']
})
export class HomepageComponent implements OnInit {

  slides: imageWithText[] = [
    { 'imagePath': 'assets/images/homeSlideshow/20150806_124428.jpg', 'imageTitle': 'asd', 'imageText': 'Here is some test text.'},
    { 'imagePath': 'assets/images/homeSlideshow/20150806_153920.jpg', 'imageTitle': 'asd', 'imageText': 'Here is some more test text.'},
    { 'imagePath': 'assets/images/homeSlideshow/20150806_163130.jpg', 'imageTitle': 'asd', 'imageText': 'The third image in the carousel.'},
    { 'imagePath': 'assets/images/homeSlideshow/20150806_165528.jpg', 'imageTitle': 'asd', 'imageText': 'The final image.'},
  ];

  constructor() {}
  ngOnInit() { }


  // public nextImage(): void {
  //   if (this.selected < this.slides.length - 1) {
  //     this.selected++;
  //   }
  // }

  // public previousImage(): void {
  //   if (this.selected > 0) {
  //     this.selected--;
  //   }
  // }
}
