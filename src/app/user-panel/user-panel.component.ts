import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  image = '';
  userName = '';
  private snapshot;

  ngOnInit() {
    this.snapshot = this.route.snapshot;
    this.image = this.snapshot.queryParams['image'];
    this.userName = this.snapshot.queryParams['userName'];
  }

}
