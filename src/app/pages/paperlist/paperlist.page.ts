import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paperlist',
  templateUrl: './paperlist.page.html',
  styleUrls: ['./paperlist.page.scss'],
})
export class PaperlistPage implements OnInit {

  constructor(
    private router:Router
  ) {}
  ngOnInit(): void {

  }
  goTopaper(value){
    if(value==1){
      this.router.navigate(['paper1']);
    }else if(value==2){
      this.router.navigate(['paper2']);
    }
    else if(value==3){
      this.router.navigate(['paper3']);
    }
    else if(value==4){
      this.router.navigate(['paper4']);
    }
    else if(value==5){
      this.router.navigate(['paper5']);
    }
    else if(value==6){
      this.router.navigate(['paper6']);
    }
    else if(value==7){
      this.router.navigate(['paper7']);
    }
    else if(value==8){
      this.router.navigate(['paper8']);
    }
    else if(value==9){
      this.router.navigate(['paper9']);
    }

  }
}
