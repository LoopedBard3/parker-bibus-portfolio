import { Component, OnInit, Input } from '@angular/core';
import { imageWithText } from '../../models/imageWithText.model';
import { CarouselConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.less'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3300, noPause: false, showIndicators: true, noWrap: false } }
  ]
})
export class SlideshowComponent implements OnInit {

  @Input()  imageInfo: imageWithText;

  constructor() { }

  ngOnInit() {
  }

}
