import { Component, OnInit } from '@angular/core';
import { AppInsightsService } from 'microsoft-applicationinsights-angular5';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.less']
})
export class ContactInformationComponent implements OnInit {

  constructor(private logger: AppInsightsService) {
    this.logger.logEvent('contact visited');
   }

  ngOnInit() {
  }

}
