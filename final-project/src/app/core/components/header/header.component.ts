import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../../auth/services/user.service';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private userService: UserService) {}

  public loggedIn = this.userService.loggedInUser.pipe(
    map((user) => !!user),
    shareReplay(1)
  );

  logout() {
    this.userService.logOut();
  }
}
