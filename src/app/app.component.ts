import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'electrical-shop-app';
  isDrawerOpen = true; // Set the initial state
  getScreenWidth: any;
  panelOpenState: boolean = false;
  showFiller = false;
  event: any;
  getSmSidebar: any;
  myElement: any;
  currentRoute: any;
  sidebarElement: any = document.getElementsByClassName('sidebar');
  rotater: any = document.getElementsByClassName('toggler-button');

  @ViewChild('drawer') public drawer!: MatDrawer;

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    console.log('getScreenWidth', this.getScreenWidth);

  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }


  @HostListener('window:resize', ['$event'])
  isLargeScreen() {
    this.myElement = document.getElementById('side-bar');
    this.getScreenWidth = window.innerWidth;

    if (this.getScreenWidth > 991) {
      this.showFiller = false;
      this.getSmSidebar == document.getElementsByClassName('sm-sidebar');
      // this.panelOpenState = true;
      return true;
    } else if (this.getScreenWidth < 992 && this.getScreenWidth > 768) {
      if (this.showFiller == true) {
        this.sidebarElement[0].classList.remove('sm-sidebar');
      } else {
        if (this.panelOpenState == false || this.showFiller == false) {
          this.sidebarElement[0].classList.add('sm-sidebar');
        }
      }
      return true;
    } else {
      this.sidebarElement[0].classList.remove('sm-sidebar');
      return false;
    }
  }

  toggle_sm(e: any) {
    this.sidebarElement[0].classList.toggle('sm-sidebar');
    this.showFiller = !this.showFiller;
    this.panelOpenState = false;
  }

  toggle_menu(e: any) {
    if (Object.values(this.myElement.classList).includes('sm-sidebar')) {
      // this.rotate();
    }
    // this.panelOpenState = true;
    this.sidebarElement[0].classList.remove('sm-sidebar');
    this.showFiller = true;
  }

  // toggler icon rotate function
  rotate() {
    this.rotater[0].classList.toggle('active');
  }

  hideSidenavAfterClick() {
    if (window.innerWidth < 768) {
      this.drawer.close();
    }

  }
}
