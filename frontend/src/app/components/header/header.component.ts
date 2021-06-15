import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Leaderboard';
  showAddTask: boolean = false;

  constructor(private uiService: UiService, private router: Router) {
  }

  ngOnInit(): void {}

   addDate(event) {
    console.log(event)
    this.uiService.addDate(event);
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
