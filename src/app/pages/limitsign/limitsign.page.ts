import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Sounds } from 'src/app/common/sounds';

@Component({
  selector: 'app-limitsign',
  templateUrl: './limitsign.page.html',
  styleUrls: ['./limitsign.page.scss'],
})
export class LimitsignPage implements OnInit {
  private clickSound = new Audio("data:audio/mpeg;base64,//sQxAAAA+i5OrQRABC9mG+3BCAACCAH/f//yE5z0Od/yf//ITnO853/O9CEIygAgEPg+8AAUWCwVioVCAEBgAAD/65xat0KnkqrfOEKkxfjOI6H//Ofpf/q8jZTBgc8uM4jcsMMMMH/+xLEAgAE6M1XGCKAAAAANIOAAAQIAADL6BfAW9DeJCI78xlb/EWEVL/6REV//0Uw0SMb//AY4ypMQU1FMy45OS4zqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo="
  );
  private bubble=new Audio(String(Sounds.bubble));
  constructor(
    public alertController: AlertController
  ) { }

  ngOnInit() {
   // this.bubble.play();
  }
  showMessage(value){
    if(value==1){
      this.clickSound.play();
      this.presentAlert("පළල් සීමාව");
    }else if(value==2){
      this.clickSound.play();
      this.presentAlert("උස සීමාව");
    }
else if(value==3){
      this.clickSound.play();
      this.presentAlert("බර සීමාව");
    }
else if(value==4){
      this.clickSound.play();
      this.presentAlert("ඇක්සලය මත නියමිත බර සීමාව");
    }
else if(value==5){
      this.clickSound.play();
      this.presentAlert("සංවර්ධිත පෙදෙස්වල ත්‍රීරෝද රත සහ ඉඩම් වාහන හැර රථ වාහන සඳහා වේග සීමාව");
    }
else if(value==6){
      this.clickSound.play();
      this.presentAlert("සංවර්ධිත පෙදෙස් වලට බාහිරව ඇති ප්‍රදේශ සඳහා සැහැල්ලු වාහන වලට ඇති වේග සීමා");
    }
else if(value==7){
      this.clickSound.play();
      this.presentAlert("අසංවර්ධිත ප්‍රදේශ සඳහා බර වාහන වේග සීමා");
    }
else if(value==8){
      this.clickSound.play();
      this.presentAlert("ත්‍රී රෝද රථ, ඉඩම් වාහන ආදිය සඳහා සංවර්ධිත හා අසංවර්ධිත ප්‍රදේශවල වේග සීමා");
    }
else if(value==9){
      this.clickSound.play();
      this.presentAlert("පාසැල් හා රෝහල් හෝ වෙනත් නියම කරන ස්ථාන සඳහා සියලුම රථවාහන වේග සීමා");
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
