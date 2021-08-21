import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sounds } from 'src/app/common/sounds';

@Component({
  selector: 'app-paper8',
  templateUrl: './paper8.page.html',
  styleUrls: ['./paper8.page.scss'],
})
export class Paper8Page implements OnInit {
  private incorrectAnswer =new Audio(String(Sounds.incorrectAnswer));
  private correctAnswer=new Audio(String(Sounds.correctAnswer));
  answerarr=[4,3,3,2,1,2,2,2,2,4,3,3,2,4,1,3,2,3,2,4]
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
    this.imageHidden=false;
    this.question_image="assets/paper8/1.JPG";
    this.question_head="රූප සටහනට අනුව වාහනයක් හන්දියකදී හැරවීමේදී 'ඇ' ස්ථානයේදී";
    this.q1="නලාව ශබ්ද කළ යුතුය"
    this.q2="කන්ණාඩිය බැලිය යුතුය";
    this.q3="සංඥාව දැක්විය යුතුය";
    this.q4="රථය නියමිත ධාවන තීරුවට හැරවිය යුතුය";
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
    this.imageHidden=false;
    this.question_image="assets/paper8/2.JPG";
    this.question_head="රූප සටහනට අනුව 'A' දැක්වෙන කඩ ඉරෙන් අදහස් කරන්නේ";
    this.q1="ඉදිරියෙන් මංසන්ධියක් ඇති බැව් දැන්වීමයි";
    this.q2="පාර හරහා ගමන් කිරීම තහනම් කළ ආයත රේඛාවයි";
    this.q3="පාර මැද සලකුණු කර ඇති මධ්‍ය රේඛාවයි";
    this.q4="ධාවන තීරුව සලකුණු කර ඇති රේඛාවයි";
  }
else if(this.questionNo==2){
    this.imageHidden=false;
    this.question_image="assets/paper8/2.JPG";
    this.question_head="රූප සටහනට අනුව 'B' දැක්වෙන කඩ ඉරෙන් අදහස් කරන්නේ";
    this.q1="මාර්ගය බෙදා ඇති රේඛාවයි";
    this.q2=" 'නවතිනු' සංඥාවේ හි පිහිටවන නැවතුම් රේඛාවයි";
    this.q3="මාර්ගය ඉඩදෙනු රේඛාවයි";
    this.q4="පදිකයන්ට මාරුවීම සඳහා ඉඩ දෙන රේඛාවයි";
  }
else if(this.questionNo==3){
    this.imageHidden=true;
    this.question_head="පාර මැද තනි සුදු ඉරක් ඇති විට";
    this.q1="වංගුවක අවදානම පෙන්වීම සඳහා යොදා ඇත";
    this.q2="සුදු ඉර කැපෙන සේ ඉස්සර කිරීම තහනම්ය";
    this.q3="දකුණට හැරවීම තහනම්ය";
    this.q4="මාර්ගය බෙදීමට ඉර යොදා ඇත";
  }
else if(this.questionNo==4){
    this.imageHidden=true;
    this.question_head="පාර මැද එක ලගින් වූ සුදු ඉරි දෙකක් ඇති විට";
    this.q1="ඉරි කැපෙන සේ ඉස්සර කිරීම හෝ හෝ දකුණට හැරවීම තහනම්ය";
    this.q2="දකුණට හැරවිය හැකිය";
    this.q3="ඉස්සර කිරීමට පුළුවන්ය";
    this.q4="දකුණට හැරවීම සහ ඉස්සර කිරීම සිදු කළ හැක";
  }
else if(this.questionNo==5){
    this.imageHidden=true;
    this.question_head="මෝටර් වාහනය ක ඉදිරිපස බෆරය මත ලෝහමය ආරක්ෂක වැටක් සවි කිරීම";
    this.q1="ඉදිරිපස බෆරය ගැලවී යාමට ඉඩ ඇත";
    this.q2="නීත්‍යානුකූල නොවේ";
    this.q3="හදිසි අනතුරකින් අනෙක් පාර්ශවයට සිදුවන හානිය වැඩිවේ";
    this.q4="රියදුරුගේ දර්ශනයට බාධා ඇතිවේ";
  }
else if(this.questionNo==6){
    this.imageHidden=true;
    this.question_head="රියදුරු විසින් වාහනයක් පදවන සෑමවිටම තම රියදුරු බලපත්‍රය තමා සන්තකයේ තබාගැනීම";
    this.q1="නීතිමය අවශ්‍යතාවයක් නොවේ";
    this.q2="නීතිමය අවශ්‍යතාවයකි";
    this.q3="ඡායා පිටපතක් තබා ගැනීම ප්‍රමාණවත් වේ";
    this.q4="අවශ්‍ය විටෙක ඉදිරිපත් කිරීමට හැකිවන පරිදි නිවසේ තබාගැනීම වඩා ආරක්ෂාකාරී වේ";
  }
else if(this.questionNo==7){
    this.imageHidden=true;
    this.question_head="තම වාහනයට ඉදිරියෙන්  ගමන් කරන කරන වාහනයකට වම් පසින් පසුකර යා හැකි වන්නේ";
    this.q1="වම් පසින් ඉස්සර කිරීම සම්පූර්ණයෙන්ම තහනම්ය";
    this.q2="ඉදිරියෙන් ගමන් කරන වාහනය කරන දකුණට හරවන බවට සංඥා කොට ඇති විටය";
    this.q3="වම් පසින් පසුකර යාම ආරක්ෂා සහිත බව හැඟෙන විට ය";
    this.q4="ඉහත කුමන අවස්ථාවකදී වුවද වම් පසින් යා හැකි";
  }
else if(this.questionNo==8){
    this.imageHidden=true;
    this.question_head="වාහන නවතා තැබීමේ දී ඔබ කළ යුතු වැදගත් කාර්යයක් වන්නේ";
    this.q1="වාහනයේ දොරගුළු හොඳින් දමා තිබීමයි";
    this.q2="නවතා තැබීමේ තිරිංග නිසි පරිදි යෙදීමයි";
    this.q3="දිවා කාලයේ වුවද නැවතුම් පහන් පහන් දල්වා තැබීමයි";
    this.q4="ඉදිරි රෝද සම්පූර්ණයෙන්ම වමට හරවා තබා නවතා තැබීමයි";
  }
else if(this.questionNo==9){
    this.imageHidden=true;
    this.question_head="අවදානම් ඇඟවීමේ පහන් දැල්විය යුත්තේ";
    this.q1="රෝගියකු ප්‍රවාහනය කරන අවස්ථාවේදීය ";
    this.q2="හතරමං හන්දියක කෙලින්ම ඉදිරියට ගමන් කරන විටය";
    this.q3="අවදානම් ස්ථානයකදී වාහනයකට ඉස්සර කරන විටය";
    this.q4="මහා මාර්ගයේ ආපදාවකට ලක්වූ වාහනයක් නවතා තබන විට දී පමණයි";
  }
else if(this.questionNo==10){
    this.imageHidden=true;
    this.question_head="මෝටර්  රථයකට ඉන්ධන පිරවීමේදී";
    this.q1="වාහනයේ එන්ජිම ගැන සැලකිලිමත් වීම අවශ්‍ය නැත ";
    this.q2="වාහනයේ එන්ජිම පණ ගන්වා තිබිය දී ඉන්ධන පිරවිය යුතුය";
    this.q3="ඉන්ධන පුරවන අවස්ථාවේදී එන්ජිම නවතා තැබිය යුතුය";
    this.q4="එන්ජිමේ තෙල් නියමිත  ප්‍රමාණයට ඇද්දැයි අනිවාර්යෙන් පරීක්ෂා කළ යුතුයි";
  }
else if(this.questionNo==11){
    this.imageHidden=true;
    this.question_head="වට රවුමක පිළිපැදිය යුතු නීතිය වන්නේ";
    this.q1="වමෙන් හා දකුණෙන් එන වාහන වලට ඉඩ දීමයි";
    this.q2="වම් පසින් එන වාහන වලට ප්‍රමුඛත්වය දීමයි";
    this.q3="පොලිස් නිලධාරීයකු පාලනය නොකරන්නේ නම් දකුණු පසින් පැමිණෙන වාහන වලට ඉඩ දීමයි";
    this.q4="ඉදිරිපසට හා දකුණට ඉඩ දීමයි ";
  }
else if(this.questionNo==12){
    this.imageHidden=true;
    this.question_head="වාහනයේ ටයර වල හුලං නියමිත ප්‍රමාණයට වඩා අඩු වූ විට";
    this.q1="ටයරයේ තැනින් තැන ගෙවී යයි";
    this.q2="ටයරය දෙපැත්ත ඉක්මනින් ගෙවී යයි";
    this.q3="ටයරය ඉක්මනින් ගෙවී යයි";
    this.q4="ටයරය මැද ඉක්මනින් ගෙවී යයි";
  }
else if(this.questionNo==13){
    this.imageHidden=true;
    this.question_head="වාහනයක ඉන්ධන දහනය අධික වීමට වඩාත් බලපෑ හැක්කේ";
    this.q1="ඉහළ ගියර වල ධාවනය";
    this.q2="දුර්වල සුක්කානම් පාලනය";
    this.q3="වංගු වලදී ත්වරණය කිරීම";
    this.q4="රළු ලෙස තිරිංග යෙදීම හා ත්වරණය කිරීම";
  }
else if(this.questionNo==14){
    this.imageHidden=true;
    this.question_head="ස්වයංක්‍රීය නොවන ගියර පෙට්ටියක් ඇති වාහනයක ගියර මාරු කිරීමේ අපහසුතාවක් ඇත්නම් වඩාත් ම හේතු වන්නේ";
    this.q1="ක්ලච් එක නිසි පරිදි ක්‍රියා නොකිරීමයි";
    this.q2="ගියර පෙට්ටියේ ඇති රෝද කැඩී තිබීම";
    this.q3="එන්ජිමේ ක්‍රියාකාරිත්වය සුමට නොවීම";
    this.q4="වාහනයේ ඩිපරන්සය දෝෂ සහිත වීම";
  }
else if(this.questionNo==15){
    this.imageHidden=true;
    this.question_head="ඔබ පදවන වාහනයේ බැටරි ආරෝපණය නොවන බව දන්වන බල්බය එක විට දැල්වූයේ නම් ඔබ මුලින්ම කළ යුත්තේ";
    this.q1="battery wire පරීක්ෂා කළ";
    this.q2="වාහනයේ බැටරිය පරීක්ෂා කළ යුතුය";
    this.q3="ඕල්ටර්නේටරයේ හෝ ඩයිනමෝව කැරකවීමට ඇති බෙල්ට් එක පරික්ෂා කළ යුතුය";
    this.q4="වාහනයේ විදුලි පද්ධතිය පරීක්ෂා කළ යුතුය";
  }
else if(this.questionNo==16){
    this.imageHidden=true;
    this.question_head="ඒකාකාරී නොවන හදිසි ඉහිරවන තිරිංග එක් රෝදයක හෝ රෝද කිහිපයක තිබේ නම් එයින් පෙන්නුම් කරන්නේ";
    this.q1="තිරිංග පද්ධතියේ තෙල් කාන්දුවක් තිබීම";
    this.q2="බ්‍රේක් ඩර්ම් ඩිස්ක් හෝ ලයිනර් දෝෂ සහිත වීම";
    this.q3="තිරිංග පැඩලය නිදහස් චලනය පමණට වඩා වැඩි වීම";
    this.q4="තිරිංග බල පද්ධතිය දෝෂ සහිත වීම";
  }
else if(this.questionNo==17){
    this.imageHidden=true;
    this.question_head="ටයරයක දෙපසට වඩා මැද කොටස අධිකව ගෙවීමෙන් පෙන්නුම් කරන්නේ";
    this.q1="අවලම්භන පද්ධතිය දෝෂ සහිත බවයි";
    this.q2="ටයරයේ වායු පීඩනය පමණට වඩා අඩු බවයි";
    this.q3="ටයරයේ වායු පීඩනය පමණට වඩා වැඩි බවයි";
    this.q4="සුක්කානම් පද්ධතිය දෝෂ සහිත බවයි";
  }
else if(this.questionNo==18){
    this.imageHidden=true;
    this.question_head="එන්ජිමකට ලිහිසි තෙල් භාවිතා කරනු ලබන්නේ";
    this.q1="එන්ජිම තුල ඇති වායු සංසරණ වේගය වැඩි කිරීමට";
    this.q2="චලනය වන කොටස් වල ගෙවීම් අවම කර ගැනීම සඳහා";
    this.q3="ඉන්ධන දහනයේ දී එහි කාර්යක්ෂමතාව වැඩි කිරීමට";
    this.q4="එන්ජිමෙහි කාර්යක්ෂමතාවය වැඩි කිරීමට";
  }
else if(this.questionNo==19){
    this.imageHidden=true;
    this.question_head="ඩිෆරන්සලයේ ක්‍රියාකාරීත්වය කුමක්ද";
    this.q1="වාහනය වංගුවක ධාවනය කිරීමේදී රෝදවල වේගය සමාන කිරීම ය";
    this.q2="ටයර් වලට හානියක් නොවී වැඩි බරක් ගෙන යාම පිණිසය";
    this.q3="ටයර් වල අක්‍රමවත් ගෙවීම අඩු කිරීමටය";
    this.q4="වාහනය වංගුවක ධාවනය කිරීමේදී රෝද වල වේගය වෙනස් කිරීමටය";
    this.nextQue="අවසාන කරන්න";
  }}
}
