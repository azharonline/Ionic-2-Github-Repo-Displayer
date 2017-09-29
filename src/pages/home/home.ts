import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  foundRepos: any;
  username: any;

  constructor(public navCtrl: NavController, public gitAccounts: GithubServiceProvider) {

  }

  getRepos() {
    this.gitAccounts.getRepos(this.username).subscribe ((data)=>{
      this.foundRepos = data.json();
    });
  }

}
