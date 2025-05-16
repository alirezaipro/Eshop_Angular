import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-user-panel-home',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './user-panel-home.component.html',
  styleUrl: './user-panel-home.component.scss'
})
export class UserPanelHomeComponent {

}
