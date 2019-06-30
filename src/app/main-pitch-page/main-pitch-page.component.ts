import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-main-pitch-page',
  templateUrl: './main-pitch-page.component.html',
  styleUrls: ['./main-pitch-page.component.scss']
})
export class MainPitchPageComponent implements OnInit {
  public menuItems:Array<any>;
  constructor(public commonService: CommonService,
    public menuService:MenuService,) { }

  ngOnInit() {
    this.menuItems = this.menuService.getVerticalMenuItems();
  }

}
