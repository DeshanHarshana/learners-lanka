import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Sounds } from 'src/app/common/sounds';

@Component({
  selector: 'app-dontsign',
  templateUrl: './dontsign.page.html',
  styleUrls: ['./dontsign.page.scss'],
})
export class DontsignPage implements OnInit {
  private clickSound = new Audio("data:audio/mpeg;base64,//sQxAAAA+i5OrQRABC9mG+3BCAACCAH/f//yE5z0Od/yf//ITnO853/O9CEIygAgEPg+8AAUWCwVioVCAEBgAAD/65xat0KnkqrfOEKkxfjOI6H//Ofpf/q8jZTBgc8uM4jcsMMMMH/+xLEAgAE6M1XGCKAAAAANIOAAAQIAADL6BfAW9DeJCI78xlb/EWEVL/6REV//0Uw0SMb//AY4ypMQU1FMy45OS4zqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo="
  );
  private bubble=new Audio(String(Sounds.bubble));
  constructor(
    public alertController: AlertController
  ) { }

  ngOnInit() {
    //.bubble.play();
  }
  showMessage(value){
    if(value==1){
      this.clickSound.play();
      this.presentAlert("ඇතුල්වීම තහනම්");
    }else if(value==2){
      this.clickSound.play();
      this.presentAlert("වම් පැත්තට හැරවීම තහනම්");
    }
else if(value==3){
      this.clickSound.play();
      this.presentAlert("දකුණු පැත්තට හැරවීම තහනම්");
    }
else if(value==4){
      this.clickSound.play();
      this.presentAlert("U හැඩයට සිටින සේ හැරවීම තහනම්");
    }
else if(value==5){
      this.clickSound.play();
      this.presentAlert("වාහන ඉස්සර කිරීම තහනම්");
    }
else if(value==6){
      this.clickSound.play();
      this.presentAlert("වාහන ඉස්සර කිරීමේ තහනමේ නිමාව");
    }
else if(value==7){
      this.clickSound.play();
      this.presentAlert("බඩු පැටවූ වාහන ඉස්සර කිරීම තහනම්");
    }
else if(value==8){
      this.clickSound.play();
      this.presentAlert("බඩු පැටවූ වාහන ඉස්සර කිරීමේ තහනමේ නිමාව");
    }
else if(value==9){
      this.clickSound.play();
      this.presentAlert("නලා ශබ්ද කිරීම තහනම්");
    }
else if(value==10){
      this.clickSound.play();
      this.presentAlert("සියලුම රථවාහන සඳහා මාර්ගය වසා ඇත");
    }
else if(value==11){
      this.clickSound.play();
      this.presentAlert("මෝටර් රථ සඳහා මාර්ගය වසා ඇත");
    }
else if(value==12){
      this.clickSound.play();
      this.presentAlert("බස් රථ සඳහා මාර්ගය වසා");
    }
else if(value==13){
      this.clickSound.play();
      this.presentAlert("ලොරි සඳහා මාර්ගය වසා ඇත");
    }
else if(value==14){
      this.clickSound.play();
      this.presentAlert("ඇමුණූ වාහන සඳහා මාර්ගය වසා ඇත");
    }
else if(value==15){
      this.clickSound.play();
      this.presentAlert("බලශක්තියෙන් ධාවනය කරනු ලබන කෘෂිකාර්මික වාහන සඳහා මාර්ගය වසා ඇත");
    }
else if(value==16){
      this.clickSound.play();
      this.presentAlert("අත්ට්‍රැක්ටර් සඳහා මාර්ගය වසා ඇත");
    }
else if(value==17){
      this.clickSound.play();
      this.presentAlert("ත්‍රීරෝද රථ සඳහා මාර්ගය වසා ඇත");
    }
else if(value==18){
      this.clickSound.play();
      this.presentAlert("යතුරු පැදි සඳහා මාර්ගය වසා ඇත");
    }
else if(value==19){
      this.clickSound.play();
      this.presentAlert("පා පැදි සඳහා මාර්ගය වසා ඇත");
    }
else if(value==20){
      this.clickSound.play();
      this.presentAlert("සතුන් ඇදගෙන යනු ලබන වාහන සඳහා මාර්ගය වසා ඇත");
    }
else if(value==21){
      this.clickSound.play();
      this.presentAlert("අත් කරත්ත සඳහා මාර්ගය වසා ඇත");
    }
else if(value==22){
      this.clickSound.play();
      this.presentAlert("පදිකයින් සඳහා මාර්ගය වසා ඇත");
    }
else if(value==23){
      this.clickSound.play();
      this.presentAlert("රථ වාහන නැවැත්වීම තහනම්");
    }
    else if(value==24){
      this.clickSound.play();
      this.presentAlert("වාහන නැවැත්වීම සහ  පැටවීම තහනම්");
    }
else if(value==25){
      this.clickSound.play();
      this.presentAlert("ඔත්තේ දිනවල වාහන නැවැත්වීම තහනම්");
    }
else if(value==26){
      this.clickSound.play();
      this.presentAlert("ඉරට්ටේ දිනවල වාහන නැවැත්වීම තහනම්");
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
