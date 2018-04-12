import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(private route: ActivatedRoute, private usersService: UsersService) {}

  image = '';
  userName = '';
  private snapshot;

  ngOnInit() {
    this.snapshot = this.route.snapshot;
    this.image = this.snapshot.queryParams['image'];
    this.userName = this.snapshot.queryParams['userName'];
  }

  changeAvatar() {
    this.usersService.changeImage(this.userName, this.image);
  }

}
