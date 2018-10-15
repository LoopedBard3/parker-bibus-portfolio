import { Component, OnInit } from '@angular/core';
import { imageWithText } from '../models/imageWithText.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  FPGASlides: imageWithText[] = [
  ];


  constructor() { }

  ngOnInit() {
  }

}
