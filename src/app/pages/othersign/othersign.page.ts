import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Sounds } from 'src/app/common/sounds';

@Component({
  selector: 'app-othersign',
  templateUrl: './othersign.page.html',
  styleUrls: ['./othersign.page.scss'],
})
export class OthersignPage implements OnInit {
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
      this.presentAlert("පදිකයන් මාරුවන ස්ථානය");
    }else if(value==2){
      this.clickSound.play();
      this.presentAlert("තනි අතට ගමන් කරන මාර්ගය");
    }
else if(value==3){
      this.clickSound.play();
      this.presentAlert("රෝහල");
    }else if(value==4){
      this.clickSound.play();
      this.presentAlert("වාහන නවත්වන ස්ථානය");
    }else if(value==5){
      this.clickSound.play();
      this.presentAlert("ආබාධිතයින් සඳහා වාහන නැවතුම");
    }else if(value==6){
      this.clickSound.play();
      this.presentAlert("බස් රථ නැවතුම");
    }else if(value==7){
      this.clickSound.play();
      this.presentAlert("බස් රථ සඳහා පමණක් ඇති ධාවන තීරුව ආරම්භය හෝ ඉදිරියට පැතිරීම");
    }else if(value==8){
      this.clickSound.play();
      this.presentAlert("බස් රථ සඳහා පමණක් වූ  ධාවන තීරුව අවසානය");
    }else if(value==9){
      this.clickSound.play();
      this.presentAlert("පා පැදි සඳහා  පමණක් ඇති ධාවන තීරුව ආරම්භය හෝ ඉදිරියට පැතිරීම");
    }else if(value==10){
      this.clickSound.play();
      this.presentAlert("පාපැදි සඳහා පමණක් ඇති ධාවන තීරුව අවසානය");
    }else if(value==11){
      this.clickSound.play();
      this.presentAlert("පා පැදි සහ පදිකයින් සඳහා වූ ධාවන තීරුව ආරම්භය හෝ ඉදිරියට පැතිරීම");
    }else if(value==12){
      this.clickSound.play();
      this.presentAlert("පාපැදි හා පදිකයන් සදහා වූ ධාවන තීරුව අවසානය");
    }else if(value==13){
      this.clickSound.play();
      this.presentAlert("වීදි පදිකයින් සඳහා පමණයි");
    }else if(value==14){
      this.clickSound.play();
      this.presentAlert("පදික උමං මග");
    }else if(value==15){
      this.clickSound.play();
      this.presentAlert("පදික පාලම");
    }else if(value==16){
      this.clickSound.play();
      this.presentAlert("අධිවේගී මාර්ගයට ප්‍රවේශය");
    }else if(value==17){
      this.clickSound.play();
      this.presentAlert("අධිවේගී මාර්ගයේ අවසානය");
    }else if(value==18){
      this.clickSound.play();
      this.presentAlert("මහජන දුරකථන ඇති ස්ථානය");
    }else if(value==19){
      this.clickSound.play();
      this.presentAlert("තොරතුරු මධ්‍යස්ථානය");
    }else if(value==20){
      this.clickSound.play();
      this.presentAlert("කාර්මික ප්‍රදේශය");
    }else if(value==21){
      this.clickSound.play();
      this.presentAlert("ආපන ශාලාව");
    }else if(value==22){
      this.clickSound.play();
      this.presentAlert("විවේකාගාරය හෝ භෝජන ශාලාව");
    }else if(value==23){
      this.clickSound.play();
      this.presentAlert("හෝටලය");
    }else if(value==24){
      this.clickSound.play();
      this.presentAlert("ඉන්ධන හල");
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
