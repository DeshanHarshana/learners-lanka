import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-roadsign',
  templateUrl: './roadsign.page.html',
  styleUrls: ['./roadsign.page.scss'],
})
export class RoadsignPage implements OnInit {

  constructor(
    private router:Router,

  ) { }

  ngOnInit() {
  }
  dangerSign(){
    this.router.navigate(['dangersign']);
  }

}
