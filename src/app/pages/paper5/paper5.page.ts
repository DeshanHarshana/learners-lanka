import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sounds } from 'src/app/common/sounds';

@Component({
  selector: 'app-paper5',
  templateUrl: './paper5.page.html',
  styleUrls: ['./paper5.page.scss'],
})
export class Paper5Page implements OnInit {
  private incorrectAnswer =new Audio(String(Sounds.incorrectAnswer));
  private correctAnswer=new Audio(String(Sounds.correctAnswer));
  answerarr=[2,3,4,3,3,3,4,3,1,4,2,3,3,4,2,3,2,1,2,2]
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
  imageHidden:boolean=false;
  nextQue="ඊලග ප්‍රශ්නය";
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    this.imageHidden=true;
    this.question_head="ජ්වලනය වන (නිවෙන දැල්වෙන) ප්‍රධාන ලාම්පු වලින් හැගවෙන්නේ";
    this.q1="අන් අය ඔබ වෙනුවෙන් නතර වී සිටිය යුතු බවයි";
    this.q2="ඔබ පැමිණෙන බවය";
    this.q3="ඔබට ප්‍රමුඛත්වය ලබාදිය යුතු බවය";
    this.q4="ඔබ සෙමින්  ධාවනය වන වාහනයක් ඉස්සර කරන බවය";
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
    this.question_head="ඔබ වෙනත් වාහනයකට ඉස්සර නොකළ යුත්තේ";
    this.q1="උසාවියක් ඉදිරියේ දී ය";
    this.q2="මාර්ගයක් මත කඩ ඉරි සළකුණු කර ඇති තැන්වල දීය";
    this.q3="අවදානම් වංගුවකදීය";
    this.q4="ආරෝග්‍ය ශාලාවක් ඉදිරියේ දී ය";
  }

else if(this.questionNo==2){
    this.imageHidden=true;
    this.question_head="අධිවේගී මාර්ගය පරිහරණය සඳහා තහනම් කර නොමැති වනුයේ";
    this.q1="ත්‍රීවිල් රථ සඳහා";
    this.q2="ඉඩම් වාහන සඳහා";
    this.q3="මෝටර් සයිකල් සඳහා";
    this.q4="ලොරි සඳහා";
  }

else if(this.questionNo==3){
    this.imageHidden=true;
    this.question_head="ඔබ වාහනයක් පසුකර යාමට අදහස් කරන්නේ නම් ගතයුතු පළවෙනි ක්‍රියාමාර්ගය කුමක්ද";
    this.q1="වාහනය නිවැරදි මං තීරුවට ගැනීම";
    this.q2="සංඥා යෙදීම";
    this.q3="නිරීක්ෂණය කිරීම";
    this.q4="අවස්ථාවට ගැළපෙන පරිදි වේගය පාලනය කිරීම";
  }

else if(this.questionNo==4){
    this.imageHidden=true;
    this.question_head="වාහනයක් නතර කිරීමේදී නැවැත්වීමේ දුර ලෙස හඳුන්වන්නේ";
    this.q1="සිතීමේ දුරෙහි සහ තිරිංග යෙදීමේදී යන දෙකෙන් අඩු දුරයි";
    this.q2="සිතීමේ දුරෙහි සහ තිරිංග දුරෙහි වෙනසයි";
    this.q3="සිතීමේ දුරෙහි සහ තිරිංග යෙදීමේදී දුරෙහි එකතුවයි";
    this.q4="සිතීමේ දුරෙහි සහ තිරිංග යෙදීමේ දුර යන දෙකෙන් වැඩිදුරයි";
  }

else if(this.questionNo==5){
    this.imageHidden=true;
    this.question_head="වාහනය මහා මාර්ගයේ පදවාගෙන යන ඔබ මගීන් මාරුවන ස්ථානය ඉදිරියෙන් ඇති බව මාර්ග සංඥාවක් දුටු විගසම";
    this.q1="මහා මාර්ගයේ මගී තදබදයක් නොමැතිනම් තමාට  රිසි සේ සේ ධාවනය කළ හැක";
    this.q2="ඉක්මනින් මගින් පැමිණීමට පෙර මගීන් මාරුවන ස්ථානය පසුකර යාම සඳහා වේගය වැඩි කළ යුතුය";
    this.q3="වාහනය නතර කර ගැනීමට බලාපොරොත්තුවෙන්  වේගය පාලනය කර ධාවනය කළ යුතුයි";
    this.q4="නලාව ශබ්ද කර තමා එන බව මගීන්ට දන්වා නොනවත්වාම යා යුතුයි";
  }

else if(this.questionNo==6){
    this.imageHidden=true;
    this.question_head="ඉදිරියෙන් යන වාහනය ඉස්සර කිරීමට ඔබට අවශ්‍යනම්";
    this.q1="ඉදිරි වාහනයේ රියදුරු  ඉස්සර කිරීමට සංඥා කළ විට එය කිරීම අවශ්‍ය නැත";
    this.q2="ඉදිරිමාර්ගය පැහැදිලිව පෙනෙන්නේ දැයි පරික්ෂා කළ යුතුය";
    this.q3="මහා මාර්ගය ඉඩ තිබෙන ස්ථානයක් දැයි පරීක්ෂා කළ යුතුයි";
    this.q4="මහා මාර්ගය හොඳින් නිරීක්ෂණය කර ඉස්සර කිරීමට හැකි දැයි පරික්ෂා කර තීරණය කළ යුතුය ";
  }

else if(this.questionNo==7){
    this.imageHidden=true;
    this.question_head="ඔබ ඉදිරියේදී දකුණට හැරවිය යුතු නම් ගමන් කළ යුත්තේ";
    this.q1="තමා කැමති මංතීරුවක් භාවිතා කළ හැක";
    this.q2="මාර්ගයේ වම්පස තීරුවේ ය";
    this.q3="දකුණු පැත්තට ගෙන යා යුතුය";
    this.q4="මාර්ගයේ මධ්‍ය රේඛාවට ආසන්නයේම ධාවන තීරුවේය";
  }

else if(this.questionNo==8){
    this.imageHidden=true;
    this.question_head="ඔබ ඉදිරියේ දී වම් පැත්තෙ නතර කළ යුතු බව දන්නේ නම් වාහනය ගමන් කරවිය යුත්තේ";
    this.q1="මාර්ගයේ වම්පස තීරුවේය";
    this.q2="මන්තීරු භාවිතා කිරීමට අවශ්‍ය නැත";
    this.q3="මාර්ගයේ මැද තීරුවේ ය";
    this.q4="මාර්ගයේ දකුණු පැත්තේය";
  }

else if(this.questionNo==9){
    this.imageHidden=true;
    this.question_head="අතුරු මාර්ගයකින් ප්‍රධාන මාර්ගයට ඔබ පිවිසෙන විට";
    this.q1="ප්‍රධාන පාරේ වාහන තදබදයක් නොමැතිනම් වමෙන් ඇතුළු විය හැක";
    this.q2="දකුණු පැත්ත බලා වාහන නොමැතිනම් මාර්ගයට ගැනීම සුදුසුය";
    this.q3="වම් පැත්ත බලා වාහන නොමැතිනම්  මාර්ගයට ගැනීම සුදුසුය";
    this.q4="මාර්ගයේ දෙපස ම සාර්ථකව නිරීක්ෂණය කිරීමෙන් පසු මාර්ගයට ගැනීම සුදුසුය";
  }

else if(this.questionNo==10){
    this.imageHidden=true;
    this.question_head="ඔබට පසුපසින් පැමිණෙන වාහනයකට ඔබව ඉස්සර කිරීමට අවශ්‍ය බව හැඟී ගියහොත් ඔබ විසින් කළ යුත්තේ ";
    this.q1="පසුපසින් එන වාහනය ගැන සැලකිලිමත් වීම අවශ්‍ය නැත";
    this.q2="වාහනයේ වේගය අඩු කර වම් පසින් ධාවනය කර ඉස්සර කිරීමට ඉඩ දිමයි";
    this.q3="වම් පස සිග්නල් ලාම්පුව දල්වා ඔහුට යන ලෙස දැන්වීමය";
    this.q4="වාහනය තවත් පාර මැදට ගෙන ඔහුට ඉස්සර වීමට අවශ්‍යම ඉඩ නොදී ගමන් කිරීමයි";
  }

else if(this.questionNo==11){
    this.imageHidden=true;
    this.question_head="ඔබ වාහනය පදවාගෙන යන අවස්ථාවකදී ඔබගේ ජංගම දුරකථනය නාද වුවහොත්";
    this.q1="නාගරික ප්‍රදේශවල දී පමණක් දුරකථනය ගෙන ප්‍රතිචාර දැක්විය නොහැක";
    this.q2="එක අතකින් සුක්කානම හසුරුවාගෙන අනිත් අතින් දුරකථනය ගෙන ප්‍රතිචාර දැක්විය යුතුය ";
    this.q3="දුරකථනයට ප්‍රතිචාර දැක්වීමට අවශ්‍ය නම් වාහනය අයින්කර නවතා තබා දුරකථනයට ප්‍රතිචාර දැක්විය යුතුය";
    this.q4="ජංගම දුරකථන රැගෙන යාම නොකළ යුතුය";
  }

else if(this.questionNo==12){
    this.imageHidden=true;
    this.question_head="ඔබ වාහනය පදවාගෙන යන අවස්ථාවකදී මාර්ගයේ ඉදිරියේ බාධකයක් නිසා වාහන පේලියක් එක් වාහනයක් පිටුපස එකෙක් වාහනයක් නතර කර තිබෙන විට ඔබ විසින් කළ යුත්තේ";
    this.q1="විරුද්ධ දිශාවෙන් වාහන නොමැතිනම් මාර්ගයේ දකුණු පැත්තෙන් ගමන් කළ හැක";
    this.q2="සියලුම වාහන ඉස්සර කරගෙන ගොස් ගොස් බාධකය ඇති තැනට පිවිසීමයි";
    this.q3="මාර්ගයේ නතර වී ඇති අවසාන වාහනයට පසුපසින් නතර  කර සිටීමයි";
    this.q4="නලාව ශබ්ද කර තමාට  ඉක්මනින් යා යුතු බව දැන්වීමයි";
  }

else if(this.questionNo==13){
    this.imageHidden=true;
    this.question_head="ඔබ වාහනය පදවාගෙන යන අවස්ථාවක ඉදිරියේ මාර්ගය අයිනේ බස් රථයක්  නතර කර මගීන් බසිමින් සිටී නම් ඔබ කළ යුත්තේ";
    this.q1="නතර කර ඇති වාහන ගැන සැලකිලිමත් වීම අවශ්‍ය නැත";
    this.q2="මගින් පාර මාරු වීමට ප්‍රථම හැකි ඉක්මනින් බස් රථය ඉස්සර කර යායුතුය";
    this.q3="බස් රථයට පසුපසින් ඔබද නතර කර සිටීම ය";
    this.q4="මගීන් මාරු වේ යැයි බලාපොරොත්තුවෙන් නතර කර කරගැනීමට හැකිවන සේ වේගය අඩු කර ධාවනය කිරීමයි";
  }

else if(this.questionNo==14){
    this.imageHidden=true;
    this.question_head="ඔබ වාහනය පදවාගෙන යන අවස්ථාවකදී ඉදිරියේ රථ වාහන ආලෝක සංඥා සහිත මංසන්ධියක් ඇති බව දැනගත් විට";
    this.q1="වේගය වැඩි කර හැකි ඉක්මනින් මංසන්ධිය පසු කළ";
    this.q2="සෑම අවස්ථාවකදීම සංඥා ලාම්පු වලට අවනතව ගමන් කළ යුතුය";
    this.q3="මංසන්ධි අසලදී නතර කර ගැනීමට සූදානම් විය යුතුය";
    this.q4="ඉදිරියෙන් ගමන් කරන වාහනය කරනකරන දේ  තමා ද කළ යුතුය";
  }

else if(this.questionNo==15){
    this.imageHidden=true;
    this.question_head="රාත්‍රී කාලයේ දී වාහනයක් ධාවනය කිරීමේදී";
    this.q1="වාහනයේ නලාව හැකි හැකි පමණ පාවිච්චි කළ යුතුය";
    this.q2="වාහන තදබදය අඩු නිසා වේගයෙන් ගමන් කළ හැක";
    this.q3="පෙනීම සීමා සහිත බැවින් සුපරීක්ෂාකාරීව ගමන් කළ යුතුය";
    this.q4="ප්‍රධාන පහන් හොඳින් ඇති විට සැලකිලිමත් වීම අවශ්‍ය නැත";
  }

else if(this.questionNo==16){
    this.imageHidden=true;
    this.question_head="සංඥා එළි සහිත මංසන්ධියක දී පොලිස් නිලධාරි මහතෙකු වාහන පාලනය කරයි නම්  ඔබ ක්‍රියා කළ යුත්තේ";
    this.q1="දකුණට හැරවීමේදී පමණක් පොලිස් නිලධාරියාගේ අණට අවනත විය යුතුය";
    this.q2="පොලිස් නිලධාරි මහතාගේ අණ අනුව ය";
    this.q3="සංඥා එළියෙන් දැක්වෙන අණ පරිදිය";
    this.q4="ඔබට රිසි පරිදි ය";
  }

else if(this.questionNo==17){
    this.imageHidden=true;
    this.question_head="ඔබ පදවන වාහනය අතරමගදී ආපදාවකට ලක් වුවහොත් ඔබ කළ යුත්තේ";
    this.q1="හැකි උපරිම මට්ටමින් මාර්ගය අවහිර නොවන පරිදි වාහනය නතර කිරීමය";
    this.q2="වාහනයේ හි පහන් දල්වා නතර කළ හැක";
    this.q3="ආපදාවක් වූ තැනම නතර කිරීමය";
    this.q4="හැකතාක් දුරට වාහනය ධාවනය කරගෙනයාම";
  }

else if(this.questionNo==18){
    this.imageHidden=true;
    this.question_head="වැසි සහිත කාලගුණයක් ඇති අවස්ථාවක වාහනය පදවන විට විට දී සෑම විටම කළ යුත්තේ";
    this.q1="වාහනයේ ටයර් හොඳින් ඇති විට සැලකිලිමත් වීම අවශ්‍ය නැත";
    this.q2="අඩු ගියරයක හෙමින් පැදවීම ය";
    this.q3="වැඩි ගියරයක වේගයෙන් පැදවීම ය";
    this.q4="වැඩි ගියරයක හෙමින් පැදවීම ය";
  }

else if(this.questionNo==19){
    this.imageHidden=true;
    this.question_head="බෑවුම් සහිත මාර්ගයක වාහනය ධාවනය කිරීමේදී ";
    this.q1="හැකි තරම් වේගයෙන් පැදවිය යුතු ය";
    this.q2="අඩු ගියරයක පැදවිය යුතුය";
    this.q3="වැඩි ගියරයක පැදවිය යුතුය";
    this.q4="ගියර් නොමැතිව නිව්ටල් තත්ත්වයේ පැදවිය යුතු ය";
    this.nextQue="අවසාන කරන්න";

  }
}
}
