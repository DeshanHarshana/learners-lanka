import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sounds } from 'src/app/common/sounds';

@Component({
  selector: 'app-paper6',
  templateUrl: './paper6.page.html',
  styleUrls: ['./paper6.page.scss'],
})
export class Paper6Page implements OnInit {
  private incorrectAnswer =new Audio(String(Sounds.incorrectAnswer));
  private correctAnswer=new Audio(String(Sounds.correctAnswer));
  answerarr=[2,4,3,2,2,1,4,4,3,4,1,3,4,4,4,4,3,3,4,3]
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
    this.question_head="තැනිතලා බිමක වාහන නවතා තැබීමේ දී ඔබ කළ යුතු වැදගත් කාරණයක් වනුයේ";
    this.q1="දොර අගුලු හොදින් වසා තැබීමයි";
    this.q2="නවතා තැබීමේ තිරිංග නිසි පරිදි යෙදීමයි";
    this.q3="දිවා කාලයේ වුවද නැවතුම් පහන් දල්වා තැබීමයි";
    this.q4="ඉදිරි රෝද දකුණට හරවා නවතා තැබීමයි";
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
    this.question_head="අවදානම් හැඟවීමේ පහන් දැල්විය යුතු වනුයේ";
    this.q1="වාහනයක රෝගී පුද්ගලයන් ගෙන යන අවස්ථාවකදීය";
    this.q2="හතරමං හන්දියක දී ඉදිරියට ගමන් කරන විටය";
    this.q3="අවදානම් ස්ථානයකදී වාහනයකට ඉස්සර කරන විටය";
    this.q4="මහා මාර්ගයේ ආපදාවට ලක් වූ වාහනයක් නවතා තබන විට දීය";
  }
else if(this.questionNo==2){
    this.imageHidden=true;
    this.question_head="මෝටර් වාහනයකට ඉන්ධන පිරවීමේදී";
    this.q1="ඉන්ධන ලබා ගැනීමේදී එන්ජිම ගැන සැලකිලිමත් වීම අවශ්‍ය නැත";
    this.q2="වාහනයේ එන්ජිම පණ ගන්වා තිබිය දී ඉන්ධන පිරවිය යුතුය";
    this.q3="ඉන්ධන පුරවන අවස්ථාවේදී අවස්ථාවේදී එන්ජිම නවතා තැබිය යුතුය";
    this.q4="එන්ජිමේ තෙල් නියමිත ප්‍රමාණයකට ඇත්දැයි අනිවාර්යෙන් පරීක්ෂාකල යුතුය";
  }
else if(this.questionNo==3){
    this.imageHidden=true;
    this.question_head="නව අංක තහඩු ක්‍රමය යටතේ ලබා දෙනු ලබන වාහන අනන්‍යතා පත්‍රය";
    this.q1="අනන්‍යතා පත්‍රය පිළිබඳ සැලකිලිමත් වීම අවශ්‍යම නැත";
    this.q2="සෑම විටම වාහනය තුල තබා ගත යුතුය";
    this.q3="නිවසේ ආරක්ෂිත ස්ථානයක සුරක්ෂිතව තැබිය යුතුය";
    this.q4="වාහන අයිතිකරු ළඟ තබා ගත යුතුය";
  }
else if(this.questionNo==4){
    this.imageHidden=true;
    this.question_head="ඔබ රාත්‍රී කාලයේ දී වාහනයක් පදවාගෙන යන විට වෙනත් වාහනයක් ඉදිරියෙන් පැමිණෙන අවස්ථාවකදී ඔබ විසින් කළ යුතු වන්නේ";
    this.q1="ඉදිරි වාහනයේ පහන් අවපාත කළහොත් පමණක් පහන් අවපාත කළ යුතුය";
    this.q2="වාහනයේ ප්‍රධාන පහන් අවපාත කළ යුතුය";
    this.q3="වාහනයේ ප්‍රධාන පහන් නිවා දැමිය යුතුය";
    this.q4="වාහනයේ නලාව ක්‍රියා කළ යුතුය";
  }
else if(this.questionNo==5){
    this.imageHidden=true;
    this.question_head="වාහනයක් ඉස්සර කිරීමේදී අනුගමනය කළ යුත්තේ";
    this.q1="3, 4 වැනි වැඩි ගියර යොදා  ගැනීම මගින් වැඩි බලයක් ලබාදීමය";
    this.q2="3, 4 වැනි වැඩි ගියර තෝරා ගැනීම ගැනීම මගින් වැඩි වේගයක් ලබාදීම";
    this.q3="1, 2 වැනි අඩු ගියර තෝරා ගැනීම මගින් වැඩි බලයක් ලබාදීම";
    this.q4="1, 2 වැනි අඩු ගියර තෝරා ගැනීම මගින් අඩු බලයක් ලබා දීම";
  }
else if(this.questionNo==6){
    this.imageHidden=true;
    this.question_head="ධාවන තීරු 3 කින් යුතු මාර්ගයක තුන් වන තීරුව භාවිතා කළ යුත්තේ";
    this.q1="දකුණට හැරවීමට";
    this.q2="අධික වේගයෙන් ධාවනය කිරීම සදහාය";
    this.q3="වෙනත් වාහනයක් පසුකර යෑමට";
    this.q4="වෙනත් වාහනයක් පසුකර යෑමට හෝ දකුණට දකුණට හැරවීමට හෝ අනතුරක් වලක්වා වලක්වා ගැනීමටය";
  }
else if(this.questionNo==7){
    this.imageHidden=true;
    this.question_head="මහා මාර්ගෝපදේශ සංග්‍රහයේ අනතුරු ඇඟවීමේ සංඥා වල වර්ණය වනුයේ";
    this.q1="රතු, සුදු හා කළු පැහැය";
    this.q2="රතු, සුදු හා නිල් පැහැය";
    this.q3="සුදු පසුතලයේ රතු පැහැය";
    this.q4="කහ පසුතලයේ කලු පැහැය";
  }
else if(this.questionNo==8){
    this.imageHidden=true;
    this.question_head="ප්‍රධාන මාර්ගයට ඇතුල් වීමේ දී ඔබ ඉඩ දිය යුත්තේ";
    this.q1="වමෙන් එන වාහන වලටය";
    this.q2="දකුණෙන් එන වාහන වලටය";
    this.q3="දකුණෙන් සහ වමෙන් එන වාහන වලටය";
    this.q4="ඉදිරියෙන් එන වාහන වලටය";
  }
else if(this.questionNo==9){
    this.imageHidden=true;
    this.question_head="රාත්‍රී කාලයේදී ධාවනයේදී ඉදිරියෙන් එන වාහනයේ ප්‍රධාන පහන් ආලෝකය අඩු නොකළ විට ඔබ කළ යුත්තේ";
    this.q1="වාහනයේ පහන් නිවා දැමීමයි";
    this.q2="වහාම ප්‍රධාන පහන්වල ආලෝකය වැඩි කිරීමයි";
    this.q3="වාහනයේ වේගය අඩු කිරීමයි";
    this.q4="වාහනයේ වේගය අඩු කර ගැනීම ගැනීම හෝ නවතා ගැනීමට ක්‍රියා කිරීමයි";
  }
else if(this.questionNo==10){
    this.imageHidden=true;
    this.question_head="සුදු පාට තනි ආයත රේකාවක් මාර්ගයේ මැද සලකුණු කර ඇති විට";
    this.q1="ඉර කපා දකුණට හැරවිය හැක ඉස්සර කිරීමට නොහැක";
    this.q2="ඉර කපා දකුණට හැරවිය යුතුය";
    this.q3="ඉර කපා දකුණට හැරවීම හා ඉස්සර කිරීම කළ හැක";
    this.q4="ඉර කපා ඉස්සර කිරීම කළ  හැක දකුණට හැරවිය නොහැක";
  }
else if(this.questionNo==11){
    this.imageHidden=true;
    this.question_head="වාහනයක් පිටුපසට පැදවීමේදී අනුගමනය කළ යුතු ක්‍රියා මාර්ගය පිලිවෙලින්";
    this.q1="වැඩි ගියරයක් තෝරා ගැනීම මගින් වැඩි බලයක් ලබා දීම";
    this.q2="තමාට රිසි සේ වාහනය පිටුපසට පැදවිය හැක";
    this.q3="වාහනය පාර අයිනට සමාන්තරව නවත්වා අතුරු මාර්ගයේ අවම දුරින් පිටුපසට පැදවීමයි";
    this.q4="වාහනය පාර අයියට සමාන්තර නොවන සේ නවත්වා අතුරු මාර්ගයේ  අවම දුරින් පිටුපසට පැදවීමයි";
  }
else if(this.questionNo==12){
    this.imageHidden=true;
    this.question_head="ඉස්සර කිරීම  නොකළ යුත්තේ";
    this.q1="පාසලක් ඉදිරියෙන් ඇති අවස්ථාවකදීය";
    this.q2="රෝහලක් ඉදිරියෙන් ඇති අවස්ථාවකදීය";
    this.q3="පාර මැද සුදු පාට කඩ ඉරක්  ඇති අවස්ථාවකදීය";
    this.q4="කන්දක් මුදුනින් ඇති අවස්ථාවකදීය";
  }
else if(this.questionNo==13){
    this.imageHidden=true;
    this.question_head="පදික මාරුව හඟවන සංඥා පුවරුව දුටු විට කළ යුත්තේ";
    this.q1="මාර්ග තදබදය ඇති විට පමණක් සැලකිලිමත් විය යුතුය";
    this.q2="පදිකයෙකු සිටීදැයි පරීක්ෂා කිරීම";
    this.q3="කහ ඉර ට මෙපිටින් වාහනය නවතා ගැනීම";
    this.q4="වාහනයේ වේගය අඩු කර ගැනීම";
  }
else if(this.questionNo==14){
    this.imageHidden=true;
    this.question_head="යාමට සූදානම් වීම සඳහා ආලෝක සංඥා වල";
    this.q1="රතුපාට පහන් දැල්වේ";
    this.q2="කොළපාට පහන් දැල්වේ";
    this.q3="කහපාට පහන් දැල්වේ";
    this.q4="කහ පාට සමග රතුපාට පහන් දැල්වේ";
  }
  else if(this.questionNo==15){
    this.imageHidden=true;
    this.question_head="වට වංගුවක් කරා එන විට ඉදිරියෙන් කහ පැහැ පහන දැල්වූ දැල්වූහොත්";
    this.q1="ආලෝක සංඥා මඟින්  පාලනය නොකරයි";
    this.q2="දකුණින් එනඅයට අයට ඉඩ දිය යුතුය";
    this.q3="වමෙන් එන අයට ඉඩ දිය යුතුය";
    this.q4="ආලෝක සංඥා විධානයට අවනත විය යුතුය";
  }
else if(this.questionNo==16){
    this.imageHidden=true;
    this.question_head="වටවංගුවක් කර එන විට ඉදිරියෙන් කහ පැහැ ආලෝක සංඥාව නිවෙමින් දැල්වෙමින් පැවතුණහොත්";
    this.q1="වට වංගුව කෙරෙහි ඔබගේ වැඩි අවධානය ලබා දීම සඳහා යොදා ඇත";
    this.q2="කෙලින්ම ඉදිරියට යා යුතුය";
    this.q3="වට වංගුවේ නීතිය අනුගමනය කළ යුතුය";
    this.q4="වට වංගුවේ නීතිය එවිට ක්‍රියාත්මක වන්නේ නැත";
  }

else if(this.questionNo==17){
    this.imageHidden=true;
    this.question_head="වාහනවල අඳුරු පැහැ ගන්වනු ලබන වීදුරු සඳහා දැනට ඇති රෙගුලාසි වනුයේ";
    this.q1="වාමුවා හැර අනෙකුත් සියළුම වීදුරු අඳුරු කළ හැක";
    this.q2="සියලුම වීදුරු අඳුරු කළ නොහැක";
    this.q3="ඉදිරි දොර දෙකෙහි වීදුරු හා ඉදිරි වාමුවාවේ උසින් පහෙන් හතර පංගුවකට යට කොටසින් අඳුරු කළ නොහැක";
    this.q4="සියලුම වීදුරු අඳුරු කළ හැක";
  }
else if(this.questionNo==18){
    this.imageHidden=true;
    this.question_head="රථ වාහන ආලෝක සංඥා වල කොළ බල්බය දැල්වේ නම් ඊළඟ අවස්ථාව වනුයේ";
    this.q1="කොළ නිවී රතු හා කහ එකවර දැල්වීමයි";
    this.q2="කොළ තිබියදී කහ පැහැය දැල්වීමයි";
    this.q3="කොළ නිවී ගොස් රතු පැහැය දැල්වීමයි";
    this.q4="කොළ නිවී ගොස් කහ පැහැය දැල්වීමයි";
  }
else if(this.questionNo==19){
    this.imageHidden=true;
    this.question_head="රථ වාහන ආලෝක සංඥා වල රතු බල්බය දැල්වේ නම් ඊළඟ අවස්ථාව වනුයේ";
    this.q1="රතු නිවී ගොස් කොළ හා කහ එකවර දැල්වීමයි";
    this.q2="රතු නිවී ගොස් කහ බල්බය දැල්වීමයි";
    this.q3="රතු එසේම තිබියදී කහ බල්බය දැල්වීමයි";
    this.q4="රතු නිවී ගොස් කොළ දැල්වීමයි";
    this.nextQue="අවසාන කරන්න";
  }
}
}
