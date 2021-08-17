import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Sounds } from 'src/app/common/sounds';

@Component({
  selector: 'app-dangersign',
  templateUrl: './dangersign.page.html',
  styleUrls: ['./dangersign.page.scss'],
})
export class DangersignPage implements OnInit {
  private clickSound = new Audio("data:audio/mpeg;base64,//sQxAAAA+i5OrQRABC9mG+3BCAACCAH/f//yE5z0Od/yf//ITnO853/O9CEIygAgEPg+8AAUWCwVioVCAEBgAAD/65xat0KnkqrfOEKkxfjOI6H//Ofpf/q8jZTBgc8uM4jcsMMMMH/+xLEAgAE6M1XGCKAAAAANIOAAAQIAADL6BfAW9DeJCI78xlb/EWEVL/6REV//0Uw0SMb//AY4ypMQU1FMy45OS4zqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo="
  );
  private bubble=new Audio(String(Sounds.bubble));
  constructor(
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.bubble.play();
  }
  showMessage(value){
    if(value==1){
      this.clickSound.play();
      this.presentAlert("jï me;a;g oaú;aj jx.=j bÈßfhks");
    }else if(value==2){
      this.clickSound.play();
      this.presentAlert("ol=Kq me;a;g jx.=j bÈßfhks");
    }
    else if(value==3){
      this.clickSound.play();
      this.presentAlert("jï me;a;g jx.=j bÈßfhks");
    }
    else if(value==4){
      this.clickSound.play();
      this.presentAlert("ol=kq me;a;g oaú;aj jx.=j bÈßfhks");
    }
    else if(value==5){
      this.clickSound.play();
      this.presentAlert("ol=kq me;a;g je,ñá jx.=j bÈßfhks");
    }
    else if(value==6){
      this.clickSound.play();
      this.presentAlert("jï me;a;g je,ñá jx.=j bÈßfhks");
    }
    else if(value==7){
      this.clickSound.play();
      this.presentAlert("oaú;aj r: ud¾.h wjidkh bÈßfhks");
    }
    else if(value==8){
      this.clickSound.play();
      this.presentAlert("oaú;aj r: ud¾.h wdrïnh bÈßfhks");
    }
    else if(value==9){
      this.clickSound.play();
      this.presentAlert("bÈßfha § ud¾.h mgqh");
    }
    else if(value==10){
      this.clickSound.play();
      this.presentAlert("ud¾.fha jïmi mgq ùu bÈßfhks");
    }
    else if(value==11){
      this.clickSound.play();
      this.presentAlert("ud¾.fha ol=kqmi mgq ùu bÈßfhks");
    }
    else if(value==12){
      this.clickSound.play();
      this.presentAlert("tlsfkl yryd .uka lrk ud¾.h bÈßfhks");
    }
    else if(value==13){
      this.clickSound.play();
      this.presentAlert("m<fjks me;s ud¾.h jï me;a;g úysfok úiu ixêh bÈßfhks");
    }
    else if(value==14){
      this.clickSound.play();
      this.presentAlert("m<fjks me;s ud¾.h ol=kq me;a;g úysfok úiu ixêh bÈßfhks");
    }


  }
  async presentAlert(message1) {

    const alert = await this.alertController.create({
      cssClass: 'TextSelectable',
      header:message1,
      mode:'ios',




      buttons: ['හරි']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

  }
}
