import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'electrical-shop-app';
  isDrawerOpen = true; // Set the initial state
  drawerWidth = '80px'; // Set the initial width

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    if (this.drawerWidth === '80px') {
      this.drawerWidth = '70%'; // Adjust the width as needed
    } else {
      this.drawerWidth = '80px';
    }
  }
}
