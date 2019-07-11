import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SingleGitHub } from './single-github.model'

@Injectable({
  providedIn: 'root'
})
export class SingleGithubService {
  singleGithub: any;
  constructor(private http: HttpClient) { }

  getSingleGithubByURL(name: string, login: string) {
    this.singleGithub = "https://api.github.com/repos/" + name + "/" + login;
    console.log(this.singleGithub)
    return this.http.get<SingleGitHub>(this.singleGithub);
  }

}
