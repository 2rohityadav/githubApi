import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github/github.service';

@Component({
  selector: 'app-searh',
  templateUrl: './searh.component.html',
  styleUrls: ['./searh.component.css'],
  providers: [GithubService]
})
export class SearhComponent implements OnInit {

  constructor(private githubService: GithubService) { }
  ngOnInit() {
    this.githubService.getUser();
  }

  getUser() {
    console.log('get user');
  }

}
