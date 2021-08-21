import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sounds } from 'src/app/common/sounds';

@Component({
  selector: 'app-paper7',
  templateUrl: './paper7.page.html',
  styleUrls: ['./paper7.page.scss'],
})
export class Paper7Page implements OnInit {
  private incorrectAnswer =new Audio(String(Sounds.incorrectAnswer));
  private correctAnswer=new Audio(String(Sounds.correctAnswer));
  answerarr=[3,4,4,1,4,3,1,2,4,4,4,4,3,2,4,3,3,3,3,3]
  questionNo=0;
  answer_gived:boolean=false;
  anwer_image:string="";
  message:string="";
  imgClass:string="";
  marks=0;
  errorAnswer:string="";
  question_page:string="";
  question_image:string="";
  question_head:string="";
  q1:string="";
  q2:string="";
  q3:string="";
  q4:string="";
  nextQue="ඊලග ප්‍රශ්නය";
  imageHidden=true;
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    this.imageHidden=true;
    this.question_head="රිය අනතුරකින් පොලිස් ස්ථානයට වාර්තා කිරීම සඳහා දී ඇති සහන කාල සීමාවේ උපරිමය";
    this.q1="පැය 36 යි";
    this.q2="පැය 12 යි";
    this.q3="පැය 24 යි";
    this.q4="පැය 48 යි";
  }
answer(value){
  this.question_page=""
if(value==this.answerarr[this.questionNo]){
  console.log("correct");
  this.answer_gived=true;
  this.correctAnswer.play();
  this.message="ඔබ ලබා දුන් පිලිතුර නිවැරදිය";
  this.anwer_image="assets/correct-incorrect/c.gif";
  this.imgClass="correctsign";
  this.marks+=5;
  this.errorAnswer="greenone";
}
else{
  console.log("wrong");
  this.answer_gived=true;
  this.errorAnswer="redone";
  this.incorrectAnswer.play();
  this.message="පිලිතුර වැරදියි. නිවැරදි පිලිතුර : " + this.answerarr[this.questionNo];
  this.anwer_image="assets/correct-incorrect/i.gif";
  this.imgClass="wrongsign";
}
}
nextQuestion(){
  this.questionNo++;
  this.answer_gived=false;
  this.question_page="animate__animated animate__zoomIn"
  if(this.questionNo==20){
    localStorage.setItem('marks',String(this.marks));
    this.router.navigate(['marks'])
  }
  if(this.questionNo==1){
    this.imageHidden=true;
    this.question_head="වාහනයක් මාර්ගයේ අනතුරට පත් වූ විට";
    this.q1="කිසිම හේතුවක් නිසාවත් වාහනය ඉවත් ඉවත් කළ නොහැක";
    this.q2="එම වාහනය එම ස්ථානයේම තැබිය යුතුය";
    this.q3="අන් වාහන වලට අවහිර වීම වළකා මාර්ගයෙන් අයින් කිරීම සඳහා අවසර ඇත";
    this.q4="එම වාහනයේ පිහිටීම සලකුණු කොට රෝගීන් ප්‍රවාහනය කිරීම සඳහා අවසර ඇත";
  }
else if(this.questionNo==2){
    this.imageHidden=true;
    this.question_head="වාහනයක් ධාවනයේදී මීටර් පුවරුවේ රතු බල්බයක් දැල්වේ නම්";
    this.q1="ආසන්නයේ ඇති ගරාජයකට ධාවනය කළ යුතුය";
    this.q2="වාහනය ගමනාන්තය දක්වා ප්‍රවේශමෙන් ධාවනය කිරීම සුදුසුය";
    this.q3="විශේෂ අවධානයක්  යොමු කිරීම අවශ්‍ය නොවේ";
    this.q4="වාහනය වහාම නතර කර දෝෂය කුමක් දැයි තහවුරු කරගත යුතුය";
  }
else if(this.questionNo==3){
    this.imageHidden=true;
    this.question_head="මහා මාර්ගයේ ධාවනය කිරීමට සුදුසු වාහනයක් යනු";
    this.q1="එහි සියලුම අංග මනා කාර්මික තත්වයෙන් තිබිය යුතු බව, රක්ෂණ සහතිකය ආදායම් බලපත්‍රය සමග අවශ්‍ය ලේඛන තිබිය යුතුය";
    this.q2="වලංගු ආදායම් බලපත්‍රයක් සහ රක්ෂණ සහතිකය පමණක් තිබිය යුතුය";
    this.q3="සුක්කානම, තිරිංග හා ටයර් පමණක් මනා තත්ත්වයෙන් තිබිය යුතුය";
    this.q4="රියදුරාට පාලනය කරගත හැකි නම් කුමන වාහනයක් වුවද ධාවනය කල හැක";
  }

else if(this.questionNo==4){
    this.imageHidden=true;
    this.question_head="ආලෝක  මඟින් පාලනය වන මංසන්ධි කොටුව සලකුණු කර ඇත්තේ";
    this.q1="මංසන්ධියක් නිතරම වාහන තදබද ඇති බව දැන්වීමටය";
    this.q2="මංසන්ධියෙන් දකුණට හැරවීම හැර හැර ඕනෑම අවස්ථාවක ඇතුළුවීමට";
    this.q3="මංසන්ධිය කෙරෙහි අවධානය වැඩි කිරීමට";
    this.q4="කොළ පැහැති ආලෝකය දැල්වූවත් මංසන්ධි කොටුවෙන් පිට වීමට නොහැකි නම් දකුණට හරවන වාහන හැර අනෙක් කිසිදු වාහනයක් ඇතුල් නොකිරීමට";
  }
else if(this.questionNo==5){
    this.imageHidden=true;
    this.question_head="ස්වයංක්‍රීය ගියර නොවන වාහනයක් තැනිතලා බිමක ගමන් ආරම්භක ක්‍රියාවලියේ මොහොතේ දෙපා තිබිය යුතු අයුරු";
    this.q1="දකුණු පාදය පාදය තිරිංග පැඩලයේ හා වම් පාදය බිම් තහඩුවේ";
    this.q2="දකුණු පාදය බිම් තහඩුවේ සහ වම් පාදය ක්ලච් පැඩලයේ";
    this.q3="දකුණු පාදේ ඇක්සලේටරයේ සහ වම් පාදය ක්ලච් පැඩලයේ";
    this.q4="දකුණු පාදය තිරිංග  පැඩලයේ සහ වම් වම් පාදය ක්ලච් පැඩලයේ";
  }
else if(this.questionNo==6){
    this.imageHidden=true;
    this.question_head="පහලටබෑවුමකදී පිටුපසට පදවන ස්වයංක්‍රීය ගියර නොවන වාහනයකදී දෙපා තිබිය  යුතු අයුරු";
    this.q1="වම් පාදය ක්ලච් පැඩලයේ සහ දකුණු පාදය තිරිංග පැඩලයේ";
    this.q2="දකුණු පාදය බිම් තහඩුවේ හා  වම් පාදය ක්ලච් පැඩලයේ";
    this.q3="දකුනු පාදය තිරිංග පැඩලයේ හා වම් පාදය බිම් තහඩුවේ";
    this.q4="වම් පාදය ක්ලච් පැඩලයේ යාන්තමට සහ දකුනු පාදය ඇක්සලේටරයේ";
  }
else if(this.questionNo==7){
    this.imageHidden=true;
    this.question_head="ස්වයංක්‍රීය ගියර නොවන වාහනයක් සාමාන්‍ය තැනිතලා නිදහස්  මාර්ගයේ ධාවනයේ දී දෙපා තිබිය යුතු අයුරු";
    this.q1="වම් පාදයක් ක්ලච් පැඩලයේ හා දකුණු පාදය තිරිංග පැඩලයේ";
    this.q2="වම් පාදය  බිම් තහඩුවේ සහ දකුණු පාදය  ඇක්සලේටරයේ";
    this.q3="වම් පාදය ක්ලච් පැඩලයේ යාන්තමට සහ දකුනු පාදය ඇක්සලේටරයේ";
    this.q4="වම් පාදය තිරිංග පැඩලයේ යාන්තමට සහ දකුනු පාදය ඇක්සලේටරයේ";
  }
else if(this.questionNo==8){
    this.imageHidden=true;
    this.question_head="ස්වයංක්‍රීය ගියර නොවෙන වාහනයක් මාර්ග තදබදය ඇති අවස්ථාවක ධාවනයේදී දෙපා තිබිය යුතු අයුරු";
    this.q1="වම් පාදය බිම් තහඩුවෙ හා දකුනු පාදය තිරිංග පැඩලයේ";
    this.q2="වම් පාදය ක්ලච් පැඩලයෙ හා දකුනු පාදය තිරිංග පැඩලයේ යාන්තමට";
    this.q3="වම් පාදය  බිම් තහඩුවේ සහ දකුණු පාදය  ඇක්සලේටරයේ";
    this.q4="වම් පාදය ක්ලච් පැඩලයේ යාන්තමට හා දකුනු පාදය ඇක්සලේටරයේ";
  }
else if(this.questionNo==9){
    this.imageHidden=true;
    this.question_head="වාහනයක් පසුකර යෑමේ නිවැරදි ක්‍රමය වනුයේ";
    this.q1="වාහනයේ වේගය අනුව ක්‍රියාවලිය වෙනස් වේ";
    this.q2="සංඥා යොදා මාර්ගය හොඳින් නිරීක්ෂණය කර වාහනය නිවැරදිව පාලනය කිරීමය";
    this.q3="වාහනයේ වේගය  වැඩිකර සංඥා යොදා මාර්ගය හොඳින් නිරීක්ෂණය කර වාහනය නිවැරදිව පාලනය කිරීමය";
    this.q4="මාර්ගය හොඳින් නිරීක්ෂණය  කර සංඥා යොදා වාහනය නිවැරදිව පාලනය කිරීමය";
  }
else if(this.questionNo==10){
    this.imageHidden=true;
    this.question_head="වෙනත් වාහනයකට ඉස්සර ඉස්සර කිරීමේදී මුලින්ම කළ යුත්තේ";
    this.q1="වාහනය නිවැරදි මාර්ග තීරුවට ගැනීමය";
    this.q2="තමාගේ වේගය නිසි ප්‍රමාණයට සකසා ගැනීමය";
    this.q3="සංඥා දැමීමය";
    this.q4="කණ්නාඩියෙන් පිටුපස බැලීමය";
  }
else if(this.questionNo==11){
    this.imageHidden=true;
    this.question_head="වෙනත් වාහනයකට ඉස්සර කිරීමට සූදානම් වන විට තවත් අයෙක් ඔබට ඉස්සර කිරීමට එන බව හැඟුණොත් මුලින්ම කළ යුත්තේ";
    this.q1="පිටුපසින් එන වාහන ගැන සැලකිලිමත් වීම අවශ්‍ය නැත";
    this.q2="වහාම ඉතා පැහැදිලි ලෙස ඔබ ඉස්සර කිරීමට සූදානම් වන බව හඟවන සංඥා දැමීමයි";
    this.q3="වහාම ඉතා පැහැදිලි ලෙස වේගය අඩුකරන සංඥාව දැමීමයි";
    this.q4="වහාම ඉතා පැහැදිලි ලෙස තමන් වම් අයිනට ඒමට සූදානම් බව අගවන සංඥාව දැමීමයි";
  }
else if(this.questionNo==12){
    this.imageHidden=true;
    this.question_head="පදිකවේදිකාව අයිනේ දික් අතට මාර්ගයේ කහ ඉරක් ඇඳ තිබුනොත්";
    this.q1="මහාමාර්ගයේ අයින පෙන්නුම් කරන ආසන්න රේඛාවය";
    this.q2="එම ස්ථානයේ වාහන නවතා තැබිය හැක";
    this.q3="එම ස්ථානයේ වාහන නවතා තැබිය නොහැක";
    this.q4="වම්පස රෝද දෙක පදිකවේදිකාව මත සිටින සේ නවතා තැබිය හැක";
  }
else if(this.questionNo==13){
    this.imageHidden=true;
    this.question_head="පදිකවේදිකාව අයිනේ දිග අතට සුදු ඉරක් ඇඳ තිබුනොත්";
    this.q1="මහාමාර්ගයේ අයින පෙන්නුම් කරන ආසන්න රේඛාවය";
    this.q2="එම ස්ථානයේ වාහන නවතා තැබිය හැක";
    this.q3="එම ස්ථානයේ වාහන නවතා තැබිය නොහැක";
    this.q4="වම්පස රෝද දෙක පදිකවේදිකාව මත සිටින සේ නවතා තැබිය හැක";
  }
else if(this.questionNo==14){
    this.imageHidden=true;
    this.question_head="නාගරික සීමාව තුළදී අනුමත උපරිම වේගසීමාවන්";
    this.q1="සියලුම වාහන පැයට කිලෝමීටර් 50 යි";
    this.q2="යතුරු පැදි, මෝටර් කාර, දිවීකාරය වෙළඳ වාහන, ත්‍රිරෝද රථය පිළිවෙලින් පැයට සැතපුම් 50, 50, 40";
    this.q3="යතුරු පැදි, මෝට කාර්, ද්වීකාර්ය පැයට කිලෝමීටර් 70, වෙළඳ වාහන පැයට කිලෝමීටර් 60 ත් රීරෝද රථ පැයට කිලෝමීටර 40";
    this.q4="යතුරු පැදි, මෝටර් කාර්, ද්වීකාරය පැයට කිලෝමීටර් 50, වෙළඳ වාහන පැයට කිලෝමීටර් 50, ත්‍රීරෝද රථ පැයට කිලෝමීටර් 40";
  }
else if(this.questionNo==15){
    this.imageHidden=true;
    this.question_head="පදික මාරුවක් ඇති විට";
    this.q1="පදික මාරුව හරහා පමණක් පදිකයන්ට මාරු විය හැක";
    this.q2="මීටර් 25 ක් ඇතුළත ඕනෑම ස්ථානයකින් පදිකයන්ට මාරු විය හැක";
    this.q3="මීටර් 50ක් ඇතුලත  ඕනෑම ස්ථානයකින් පදිකයන්ට මාරු විය නොහැක";
    this.q4="මීටර් 50ක් ඇතුලත ඕනෑම ස්ථානයකින් පදිකයන්ට මාරු විය හැක";
  }
else if(this.questionNo==16){
    this.imageHidden=true;
    this.question_head="රථ වාහන ආලෝක සංඥා වල කහ එළිය පමණක් දැල්වේ නම්";
    this.q1="රතු එළිය වැටීමට ප්‍රථම වේගයෙන් ධාවනය කළ යුතුය";
    this.q2="ඊළඟට කොළපාට එළිය දැල්වෙන බැවින් යෑමට සූදානම් විය යුතුය";
    this.q3="ඊළඟට රතු එළිය දැල්වෙන බැවින් නැවැත්විය යුතුය";
    this.q4="ඊළඟට කොළපාට එළිය දැල්වෙන බැවින් ඉදිරියට ගමන් කළ යුතුය";
  }
else if(this.questionNo==17){
    this.imageHidden=true;
    this.question_head="ඔබ ගමන් කරන මාර්ගයේ ඉදිරිය නොපෙනෙන වංගුවක් ඇති විට ඔබ කළ යුත්තේ";
    this.q1="වාහනේ හැමවිටම මාර්ගය මැදින් ගමන් කිරීමය";
    this.q2="පැමිණි වේගයෙන්ම නලාව ශබ්ද කරගෙන යාමය";
    this.q3="නතර කිරීමට බලාපොරොත්තුවෙන් වේගය අඩුකර වරක් නලාව ශබ්ද කර යාමය";
    this.q4="වාහනයේ නලාව ශබ්ද නොකර වේගයෙන් යාමය";
  }
  else if(this.questionNo==18){
    this.imageHidden=false;
    this.question_image="assets/paper7/1.JPG";
    this.question_head="රූප සටහනට අනුව වාහනයක් හන්දියක දී හැරවීමේ 'අ' ස්ථානයේදී";
    this.q1="වාහන නැවැත්විය යුතුය";
    this.q2="සංඥාව දැක්විය යුතුය";
    this.q3="කන්ණාඩිය බැලිය යුතුය";
    this.q4="වේගය අඩු කළ යුතුය";
  }
else if(this.questionNo==19){


    this.imageHidden=false;
    this.question_image="assets/paper7/1.JPG";

    this.question_head="රූප සටහනට අනුව අනුව වාහනයක් හන්දියකදී හැරවීමේදී 'ආ'ස්තානයේදී";
    this.q1="නලාව ශබ්ද කළ යුතුය";
    this.q2="කන්ණාඩිය බැලිය යුතුය";
    this.q3="සංඥාව දැක්විය යුතුය";
    this.q4="වේගය වැඩි කළ යුතුය";
    this.nextQue="අවසාන කරන්න";
  }

}
}
