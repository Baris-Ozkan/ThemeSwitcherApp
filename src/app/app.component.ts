import {Component, OnInit} from '@angular/core';
import {ThemeService} from "./core/services/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'theme-app';

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    let savedTheme = localStorage.getItem('theme');

    if (savedTheme != null) {
      this.themeService.switchTheme(savedTheme);
    }
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
}
