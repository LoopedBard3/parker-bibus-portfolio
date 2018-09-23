import { Component, ReflectiveInjector } from '@angular/core';
import { MyMonitoringService } from './MyMonitoringService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'parker-bibus-portfolio';
  constructor(private myMonitoringService: MyMonitoringService) {
    const injector = ReflectiveInjector.resolveAndCreate([MyMonitoringService]);
    this.myMonitoringService = injector.get(MyMonitoringService);
    this.myMonitoringService.logPageView();
  }
}
