import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  activeRoute: string;

  constructor(public route: ActivatedRoute) {
    this.route.url.subscribe(params => {
      this.activeRoute = params[0].path;
    })
  }

  ngOnInit() {
  }

  onClose() {
    this.closeSidenav.emit();
  }

}
