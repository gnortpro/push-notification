import { Component, OnInit } from "@angular/core";
import { MessagingService } from "./shared/messaging.service";
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  message;
  deviceInfo = null;
  constructor(
    private messagingService: MessagingService, 
    private deviceService: DeviceDetectorService
    ) {
      this.epicFunction();
    }

  ngOnInit() {
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    let userId;
    if (isMobile) {
      userId = 'Mobile' + this.deviceInfo.device + this.deviceInfo.browser;
    }
    if (isTablet) {
      userId = 'Tablet' + this.deviceInfo.device + this.deviceInfo.browser;
    }
    if (isDesktopDevice) {
      userId = 'Desktop' + this.deviceInfo.device + this.deviceInfo.browser;
    }
    this.messagingService.requestPermission(userId);
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }
  epicFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }
}
