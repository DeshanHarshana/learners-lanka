import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signlist',
  templateUrl: './signlist.page.html',
  styleUrls: ['./signlist.page.scss'],
})
export class SignlistPage implements OnInit {
  kk="wk;=re we.ùfï ix{d ";
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
goTo(value){
if(value==1){
this.router.navigate(['dangersign'])
}
else if(value==2){
  this.router.navigate(['commandsign'])
}
else if(value==3){
  this.router.navigate(['dontsign'])
}
else if(value==4){
  this.router.navigate(['othersign'])
}
else if(value==5){
  this.router.navigate(['limitsign'])
}

}
}
