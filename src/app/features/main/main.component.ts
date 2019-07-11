import { Component, OnInit } from '@angular/core';
import {gitHub} from '../../github.model';
import {GithubDataService} from '../../github-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  githubs:gitHub[];
  inputValue='';
  constructor(private gitHubService:GithubDataService ,private router: Router) { }

  ngOnInit() {
  }
  onHandleChange(event:Event){
    this.inputValue =(<HTMLInputElement>event.target).value;
      this.gitHubService.getGithubRep(this.inputValue)
      .subscribe(data=>this.githubs=data);
  }
}
