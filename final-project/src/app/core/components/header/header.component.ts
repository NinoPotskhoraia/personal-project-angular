import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../../auth/services/user.service';
import { BehaviorSubject, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private userService: UserService) {}
  dailyAffirmation: BehaviorSubject<string> = new BehaviorSubject('');
  showButton = new BehaviorSubject(true);

  public loggedIn = this.userService.loggedInUser.pipe(
    map((user) => !!user),
    shareReplay(1)
  );

  affirmation() {
    let index = Math.floor(Math.random() * 10);
    this.dailyAffirmation.next(this.affirmations[index]);
    this.showButton.next(false);
  }

  logout() {
    this.userService.logOut();
  }

  affirmations: string[] = [
    'From this moment forward, I choose to let everything in my life to flow free and easy.',

    'From this moment forward I invite love into my life. I am lovable and able to give and receive unconditional love.',

    'From this moment forward I choose to attract positive relationships into my life.',

    'From this moment forward I invite God’s wealth to flow through me in avalanches of abundance. God is my source of supply.',

    'Today I choose happiness. I will see the beauty in all things, nature, and people. Starting with the beauty within my being.',

    'Today my intention is to be kind to myself and others. To show empathy and practice self-love and self-care. I care about my well-being.',

    'My situation is what it is and it will not beat me. I relax in the knowledge that all is good now.',

    'Today and moving forward I only allow positive thoughts in my mind. I understand that I am in control of my thoughts and how I feel.',

    'I choose to attract wisdom and positive opportunities into my life.',
    'I now choose to trust in my inner guidance and relax in the knowing that my heart will never stir me wrong.',
  ];
}
