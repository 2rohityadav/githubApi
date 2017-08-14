import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github/github.service';

@Component({
  selector: 'app-searh',
  templateUrl: './searh.component.html',
  styleUrls: ['./searh.component.css'],
  providers: [GithubService]
})
export class SearhComponent implements OnInit {

  public searchText;
  public searchCount;
  public searchResult;

  constructor(private githubService: GithubService) { }
  ngOnInit() {

  }

  onKey(e: any) {
    this.searchText = e.target.value;
  }
  getUsersbtn() {
    this.githubService.getUserServ(this.searchText).subscribe(
      res => {
        console.log(res);
        this.searchCount = res.total_count;
        this.searchResult = res;
      }
    );
  }

}
