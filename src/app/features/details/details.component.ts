import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SingleGithubService } from '../../single-github.service';
import { SingleGitHub } from '../../single-github.model';
import { ActivatedRoute } from '@angular/router';
import { gitHub } from 'src/app/github.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  constructor(private githubService: SingleGithubService, private activatedRoute: ActivatedRoute) { }
  subscription: Subscription;
  name: string;
  login: string;
  id: number;
  singleRepo: any;

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params) => {
        this.name = params.name;
        this.login = params.login;
        console.log(this.name);
        console.log(this.login)
        this.singleRepo = this.githubService.getSingleGithubByURL(this.login, this.name).subscribe(data => this.singleRepo = data);
        console.log(this.singleRepo);
        console.log(this.githubService.getSingleGithubByURL(this.login, this.name))
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.singleRepo.unsubscribe();
  }

}
