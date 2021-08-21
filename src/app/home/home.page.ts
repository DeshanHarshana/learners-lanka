import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sanya="ud¾. ix{d"
  constructor(
    private router:Router
  ) {}
  goToOne(){
    this.router.navigate(['roadsign']);
  }
  paperList(){
    this.router.navigate(['paperlist'])
  }
}
