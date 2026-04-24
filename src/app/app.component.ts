import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:false,
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUser?: User| undefined;
  onSelectdUser(user: User) {
    this.selectedUser = user;
  }
}

