// import { ModelScrollService } from './../../../@services/model-scroll.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isChange: boolean = false;
  public visible: boolean = false;
  public khmerLabel = 'សមាគមធានារ៉ាប់រងកម្ពុជា';
  public englishLabel = 'INSURANCE ASSOCIATION OF CAMBODIA';
  public aboutUsMenuIsOpened : boolean = false;
  public activitiesMenuIsOpened : boolean = false;
  public marketInfoMenuIsOpened : boolean = false;
  public publicAwarenessIsOpened: boolean = false;
  public ruleIsOpened: boolean = false;

  @ViewChild('navDrop') navDrop: ElementRef | undefined; // Angular Version < 8
  
  constructor(
    // private modelService: ModelScrollService
  ) { }

  ngOnInit(): void {
  }

  public openSidebar() {
    this.visible = true;
    // this.modelService.openModel();
  }

  public close() {
    this.visible = false;
    // this.modelService.closeModel();
  }

  public toggleAboutUsMenu() {
    this.aboutUsMenuIsOpened = !this.aboutUsMenuIsOpened;
  }

  public toggleActivitiesMenu() {
    this.activitiesMenuIsOpened = !this.activitiesMenuIsOpened;
    // this.publicAwarenessIsOpened = this.publicAwarenessIsOpened;
  }

  public toggleMarketInfoMenu() {
    this.marketInfoMenuIsOpened = !this.marketInfoMenuIsOpened;
  }

  public togglePublicAwareness() {
    this.publicAwarenessIsOpened = !this.publicAwarenessIsOpened;
    this.toggleActivitiesMenu();
  }

  public toggleRule() {
    this.ruleIsOpened = !this.ruleIsOpened;
    this.toggleMarketInfoMenu()
  }

}
