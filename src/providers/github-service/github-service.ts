import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  constructor(public http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getRepos(username) {
    let repos = this.http.get('https://api.github.com/users/'+username+'/repos');
    return repos;
  }

}
