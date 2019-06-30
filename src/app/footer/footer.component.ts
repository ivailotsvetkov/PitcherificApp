import { Component, OnDestroy, OnInit, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../common.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  


  constructor(
    public commonService: CommonService

  ) {
  }

  ngOnInit() {

  }

  

}

