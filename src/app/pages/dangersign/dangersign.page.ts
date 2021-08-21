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
   // this.bubble.play();
  }
  showMessage(value){
    if(value==1){
      this.clickSound.play();
      this.presentAlert("වම් පැත්තට ද්විත්ව වංගුවක් ඉදිරියෙනි");
    }else if(value==2){
      this.clickSound.play();
      this.presentAlert("දකුණු පැත්තට වංගුව ඉදිරියෙනි");
    }
else if(value==3){
      this.clickSound.play();
      this.presentAlert("වම් පැත්තට වංගුව ඉදිරියෙනි");
    }else if(value==4){
      this.clickSound.play();
      this.presentAlert("දකුණු පැත්තට ද්විත්ව වංගුව ඉදිරියෙනි");
    }else if(value==5){
      this.clickSound.play();
      this.presentAlert("දකුණු පැත්තට වැලමිටි වංගුව ඉදිරියෙනි ");
    }else if(value==6){
      this.clickSound.play();
      this.presentAlert("වම් පැත්තට වැලමිටි වංගුව ඉදිරියෙනි");
    }else if(value==7){
      this.clickSound.play();
      this.presentAlert("ද්විත්ව රථවාහන මාර්ගයේ අවසානය ඉදිරියෙනි");
    }else if(value==8){
      this.clickSound.play();
      this.presentAlert("ද්විත්ව රථවාහන මාර්ගයේ ආරම්භය ඉදිරියෙනි");
    }else if(value==9){
      this.clickSound.play();
      this.presentAlert("ඉදිරියේදී මාර්ගය පටුය");
    }else if(value==10){
      this.clickSound.play();
      this.presentAlert("මාර්ගයේ වම්පස පටුවීම ඉදිරියෙනි");
    }else if(value==11){
      this.clickSound.play();
      this.presentAlert("මාර්ගයේ දකුණු පස පටුවීම ඉදිරියෙනි");
    }else if(value==12){
      this.clickSound.play();
      this.presentAlert("එකිනෙක හරහා ගමන් කරන මාර්ගය ඉදිරියෙනි");
    }else if(value==13){
      this.clickSound.play();
      this.presentAlert("පලවෙනි පැති මාර්ගය වම් පැත්තට විහිදෙන විසම සන්දිය ඉදිරියෙනි");
    }else if(value==14){
      this.clickSound.play();
      this.presentAlert("පළවැනි පැති මාර්ගය දකුණු පැත්තට විහිදෙන විසම සන්දිය");
    }else if(value==15){
      this.clickSound.play();
      this.presentAlert("T හැඩයේ මංසන්ධිය ඉදිරියෙනි");
    }else if(value==16){
      this.clickSound.play();
      this.presentAlert("Y හැඩයේ මංසන්ධිය ඉදිරියෙනි");
    }else if(value==17){
      this.clickSound.play();
      this.presentAlert("වම් පැත්තෙන් රථවාහන ප්‍රධාන මාර්ගයට එක්වන සන්දිය ඉදිරියෙනි");
    }else if(value==18){
      this.clickSound.play();
      this.presentAlert("වම් පැත්තෙන් රථවාහන ප්‍රධාන මාර්ගයට සෘජුකෝණාස්‍රාකාර ව එක්වන සන්දිය ඉදිරියෙනි");
    }else if(value==19){
      this.clickSound.play();
      this.presentAlert("දකුණු පැත්තෙන් රථවාහන ප්‍රධාන මාර්ගයට එක්වන සන්ධියක් ඉදිරියෙනි");
    }else if(value==20){
      this.clickSound.play();
      this.presentAlert("දකුණු පැත්තෙන් රථවාහන ප්‍රධාන මාර්ගයට සෘජුකෝණාස්‍රාකාර ව එක්වන සන්දිය ඉදිරියෙනි");
    }else if(value==21){
      this.clickSound.play();
      this.presentAlert("පටු පාලම ඉදිරියෙනි");
    }else if(value==22){
      this.clickSound.play();
      this.presentAlert("රථවාහන දෙපසට ගමන් කිරීම ඉදිරියෙනි");
    }else if(value==23){
      this.clickSound.play();
      this.presentAlert("ඉදිරිය නවතිනු");
    }else if(value==24){
      this.clickSound.play();
      this.presentAlert("ඉදිරියෙන් මාර්ගය ඉඩ දෙනු");
    }else if(value==25){
      this.clickSound.play();
      this.presentAlert("වටරවුම ඉදිරියෙනි");
    }else if(value==26){
      this.clickSound.play();
      this.presentAlert("රථ වාහන ආලෝක සංඥා ඉදිරියෙනි");
    }else if(value==27){
      this.clickSound.play();
      this.presentAlert("අන්තරාදායක බෑවුම ඉදිරියෙනි");
    }else if(value==28){
      this.clickSound.play();
      this.presentAlert("අන්තරාදායක නැගුම ඉදිරියෙනි");
    }else if(value==29){
      this.clickSound.play();
      this.presentAlert("ලිස්සන සුළු මාර්ගය ඉදිරියෙනි");
    }else if(value==30){
      this.clickSound.play();
      this.presentAlert("බුරුල් කළු ගල් කැබලි/ බොරළු ඉදිරියෙනි");
    }else if(value==31){
      this.clickSound.play();
      this.presentAlert("ගල් පර්වත කැබලි වැටෙන ස්තානය ඉදිරියෙනි");
    }else if(value==32){
      this.clickSound.play();
      this.presentAlert("පදිකයන් මාරුවන ස්තානය ඉදිරියෙනි");
    }else if(value==33){
      this.clickSound.play();
      this.presentAlert("ළමයින් මාරුවන ස්තානය ඉදිරියෙනි");
    }else if(value==34){
      this.clickSound.play();
      this.presentAlert("අන්ධ පුද්ගලයන් මාරුවන ස්තානය ඉදිරියෙනි");
    }else if(value==35){
      this.clickSound.play();
      this.presentAlert("මිනිසුන් වැඩෙහි යෙදෙන යෙදෙන ස්ථානය ඉදිරියෙනි");
    }else if(value==36){
      this.clickSound.play();
      this.presentAlert("ගේට්ටු සහිත දුම්රිය හරස් මාර්ගය ඉදිරියෙනි");
    }else if(value==37){
      this.clickSound.play();
      this.presentAlert("අනාරක්ෂිත දුම්රිය හරස් මාර්ගය ඉදිරියෙනි");
    }else if(value==38){
      this.clickSound.play();
      this.presentAlert("බස් රථ ධාවන තීරුව ඉදිරියෙනි");
    }else if(value==39){
      this.clickSound.play();
      this.presentAlert("පාපැදි ධාවන තීරුව ඉදිරියෙනි");
    }else if(value==40){
      this.clickSound.play();
      this.presentAlert("පාපැදිකරුවන් මාරුවන ස්තානය ඉදිරියෙනි");
    }else if(value==41){
      this.clickSound.play();
      this.presentAlert("ගවයන් හෝ වෙනස් සතුන් මාර්ගය හරහා ගමන් කිරීමට ඉඩ ඇති ස්ථානයක් ඉදිරියෙනි");
    }else if(value==42){
      this.clickSound.play();
      this.presentAlert("මාර්ගය පැත්තකින් පිහිටි ජලාශයකට ජලාශයකට බෑවුම් වන ස්ථානය ඉදිරියෙනි");
    }else if(value==43){
      this.clickSound.play();
      this.presentAlert("අන්තරාදායක බෑවුම් සහිත පැත්ත ඉදිරියෙනි ");
    }else if(value==44){
      this.clickSound.play();
      this.presentAlert("වේග බාධක උස් තීරුව");
    }else if(value==45){
      this.clickSound.play();
      this.presentAlert("අසමාන මාර්ග  ඉදිරියෙනි");
    }else if(value==46){
      this.clickSound.play();
      this.presentAlert("ගිණුම හෝ දිය දියමංකඩ ඉදිරියෙනි");
    }else if(value==47){
      this.clickSound.play();
      this.presentAlert("උස්වැටි පාලම ඉදිරියෙනි");
    }else if(value==48){
      this.clickSound.play();
      this.presentAlert("උමග ඉදිරියෙනි");
    }else if(value==49){
      this.clickSound.play();
      this.presentAlert("පහළින් පියාසර කරන ගුවන් යානා ඉදිරියෙනි ");
    }else if(value==50){
      this.clickSound.play();
      this.presentAlert("දුම්රිය හරස් මාර්ගය ඉදිරියෙනි");
    }else if(value==51){
      this.clickSound.play();
      this.presentAlert("දුම්රිය මාර්ග දෙකක් හෝ හෝ වැඩි වැඩි ගණනක් සහිත දුම්රිය හරස් මාර්ගය ඉදිරියෙනි");
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
