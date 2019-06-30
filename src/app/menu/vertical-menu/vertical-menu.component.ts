import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuService } from '../../menu.service';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VerticalMenuComponent implements OnInit {
  @Input('menuItems') menuItems;
  @Input('menuParentId') menuParentId;
  @Output() onClickMenu:EventEmitter<any> = new EventEmitter<any>();
  parentMenu:Array<any>;
  constructor(
    public commonService: CommonService,
    public menuService: MenuService, 
    public router:Router
  ) { }

  ngOnInit() {
    this.parentMenu = this.menuItems.filter(item => item.parentId == this.menuParentId);  
  }

  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let mainContent = document.getElementById('main-content');
        if(mainContent){
          mainContent.scrollTop = 0;
        }
      }                
    });
  }

  onClick(menu){
    this.onClickMenu.emit(menu);  
    this.menuService.toggleMenuItem(menu.id);
    if(menu.templateId != null) {
      this.commonService.selectTemplate(menu.templateId);
    }
    // this.menuService.closeOtherSubMenus(this.menuItems, menuId);   
  }


}
