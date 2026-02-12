import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-github-users',
  imports: [FormsModule],
  templateUrl: './github-users.component.html',
  styleUrl: './github-users.component.scss'
})
export class GithubUsersComponent {

  username = '';

  searchUser() {
    console.log(this.username);
  }

}
