import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gitHub } from './github.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubDataService {
  githubApi: string;
  gitApi: gitHub[];
  githubApiFullname: string;
  // testUrl = 'https://api.github.com/repositories';

  constructor(private http: HttpClient) { }

  getGithubRep(repoName) {
    this.githubApi = "https://api.github.com/search/repositories?q=" + repoName;
    console.log(this.http.get<gitHub[]>(this.githubApi))
    return this.http.get<gitHub[]>(this.githubApi)

  }
}

