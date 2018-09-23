import { Component, ReflectiveInjector } from '@angular/core';
import { MyMonitoringService } from './MyMonitoringService';

@Component({
  template: ''
})
export class BaseComponent {
  private myMonitoringService: MyMonitoringService;

  constructor() {
    // Manually retrieve the monitoring service from the injector
    // so that constructor has no dependencies that must be passed in from child
    const injector = ReflectiveInjector.resolveAndCreate([MyMonitoringService]);
    this.myMonitoringService = injector.get(MyMonitoringService);
    this.logNavigation();
    console.log('sending page view');
  }

  private logNavigation() {
    this.myMonitoringService.logPageView();
  }
}
