import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sounds } from 'src/app/common/sounds';

@Component({
  selector: 'app-paper9',
  templateUrl: './paper9.page.html',
  styleUrls: ['./paper9.page.scss'],
})
export class Paper9Page implements OnInit {
  private incorrectAnswer =new Audio(String(Sounds.incorrectAnswer));
  private correctAnswer=new Audio(String(Sounds.correctAnswer));
  answerarr=[1,2,3,2,2,3,4,4,4,3,2,3];
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
    this.question_head="ධාවනය කිරීමේදී ඉදිරිපස දෙදරීමට හේතු හේතුවිය හැක්කේ";
    this.q1="සුක්කානම් පද්ධතියේ කොටස් ගෙවී තිබීම";
    this.q2="වෙනත් නිෂ්පාදන වර්ග වල ටයර සවිකර තිබීම ය";
    this.q3="ඉදිරි රෝදවල ටයර වල වායු ප්‍රමාණය වෙනස් අගයන් වීම";
    this.q4="ඉදිරි රෝද ටයර් වල කට්ට මෝස්තරය වෙනස් වීම ය";
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
  this.marks+=8;
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
    this.question_head="වාහනේක ජල පොම්පයේ ක්‍රියාකාරීත්වය වනුයේ";
    this.q1="එන්ජිමේ තෙල් සංසරණය පහසු කිරීම";
    this.q2="එන්ජිම තුල ජලය සංසරණය ඇති කිරීම";
    this.q3="එන්ජිමේ භාවිතා කරන ජලය සිසිල් කිරීම ය";
    this.q4="රේඩියේටරය සිසිල් කිරීම ය";
  }
else if(this.questionNo==2){
    this.imageHidden=true;
    this.question_head="වාහනය පදවාගෙන යන අවස්ථාවක එකවිටම තිරිංග පද්ධතියට සම්බන්ධ පාලන බල්බය දැල්වේ නම් ඔබ විසින් කළ යුත්තේ";
    this.q1="වාහනය ආසන්නයේම ඇති ගරාජයට ගෙනයාමයි";
    this.q2="ගමනාන්තය දක්වා ප්‍රවේශමෙන් ගමන් කිරීමයි";
    this.q3="වාහනය වහාම නවත්වා තිරිංග තෙල් ඇත්දැයි පරික්ෂා කිරීම";
    this.q4="කාර්මිකයෙකු ගෙන්වා පරීක්ෂා කරන තුරු වාහනය නවතා තැබීම";
  }
else if(this.questionNo==3){
    this.imageHidden=true;
    this.question_head="වාහනයේ ටයර වල වායු පීඩනය අඩු වූ විට";
    this.q1="ටයර වල එක පැත්තක් පමණක් වැඩියෙන් ගෙවේ";
    this.q2="ටයර වල දෙපැත්ත ගෙවී මැද ඉතිරි වේ";
    this.q3="ටයර වල මැද ගෙවී දෙපැත්ත ඉතිරි වේ";
    this.q4="ටයර් ගෙවීමට හුලං බල පාන්නේ නැත";
  }
else if(this.questionNo==4){
    this.imageHidden=true;
    this.question_head="සුක්කානම් පද්ධතියේ නිදහස් චලනය වැඩි වන්නේ";
    this.q1="ඉදිරි ටයර් ගෙවී ඇති විට";
    this.q2="සුක්කානම් පද්ධතියේ කොටසක් ගෙවී ඇති විට";
    this.q3="ඉදිරි රෝදවල වායු පීඩනය වැඩි විට";
    this.q4="ඉදිරි රෝදවල වායු පීඩනය අඩු විට";
  }
else if(this.questionNo==5){
    this.imageHidden=true;
    this.question_head="ඔබ පදවාගෙන යන වාහනයේ එන්ජිම අධික ලෙස රත්වීම නිසා වතුර බොයිල් කිරීමක් ඇති වුවහොත් අඩු වතුර පිරවීමේදී";
    this.q1="වාහනයේ එන්ජිම ගැන සැලකිලිමත් වීම අවශ්‍ය නැත";
    this.q2="එන්ජිම නවතා වතුර පිරවිය යුතුයි";
    this.q3="එන්ජිම ධාවනය වෙමින් තිබියදී වතුර පිරවිය යුතුයි";
    this.q4="ඉහත කරුණු දෙකම නිවැරදිය";
  }
else if(this.questionNo==6){
    this.imageHidden=true;
    this.question_head="ඔබ පදවාගෙන යන වාහනයෙහි විදුලි දෝෂයක් නිසා වයර් පිළිස්සෙන ගඳක් ඇති වුවහොත් වහාම කළ යුත්තේ";
    this.q1="වාහනයෙහි සියලුම පහන් නිවා දැමීමයි";
    this.q2="ප්‍රධාන ස්විචය ක්‍රියා විරහිත කිරීමයි";
    this.q3="පියුස් (විලායකය) ගැලවීමයි";
    this.q4="බැටරි වයර් ගැලවීමයි";
  }
else if(this.questionNo==7){
    this.imageHidden=true;
    this.question_head="වාහනයක් ලිස්සා යන අවස්ථාවේදී අවදානම අඩු කර ගැනීම සඳහා";
    this.q1="ලිස්සා යන අවස්ථාවේ අවදානම අඩු කළ නොහැක";
    this.q2="එකවරම තිරිංග යොදා වේගය පාලනය කළ යුතුය";
    this.q3="තිරිංග නොදා ලිස්සා යන දිශාවට විරුද්ධ දිශාවට සුක්කානම හැරවිය";
    this.q4="ගියර මගින් පාලනය කර ලිස්සා යන දිශාවට ක්‍රමානුකූලව සුක්කානම පාලනය කළ යුතුය";
  }
else if(this.questionNo==8){
    this.imageHidden=true;
    this.question_head="තිරිංග තෙල් භාවිතා කරන වාහනය ක තිරිංග පැඩලය පහතට ම බැසීමක් සිදු වේ නම් ඉන් අදහස් වන්නේ";
    this.q1="තිරිංග පැඩලයෙ දෝෂයක් ඇති බවයි";
    this.q2="බ්‍රේක් බයින්ඩ් (තිරිංග හිර වීමක්) ඇති බවයි";
    this.q3="තිරිංග නිසි පරිදි ක්‍රියා කරන බවයි";
    this.q4="තිරිංග තෙල් කාන්දුවක් ඇති බවයි";
  }
else if(this.questionNo==9){
    this.imageHidden=true;
    this.question_head="වාහනයකට තිරිංග යෙදීමේදී වම් පැත්තට ඇදී යන්නේ නම් එයින් අදහස් වන්නේ";
    this.q1="රෝදවල වායු පීඩන එකිනෙකට වෙනස් බවයි";
    this.q2="ඉදිරිපස වම් පැත්තේ රෝදයේ තිරිංග රෝදයේ තිරිංග තෙල් කාන්දු වීමයි";
    this.q3="ඉදිරිපස දකුණු පැත්තේ රෝදයේ තිරිංග තෙල් කාන්දු වීමයි";
    this.q4="පසුපස රෝද වලට තිරිංග නොමැති බවයි";
  }
else if(this.questionNo==10){
    this.imageHidden=true;
    this.question_head="වාහනයක්  ධාවනය කිරීමේදී ගියර් මාරු කිරීමේ අපහසුතාවක් ඇත්නම් වඩාත් විය හැක්කේ";
    this.q1="වාහනයේ ගියර ලීවරය දෝෂයක් ඇති බවයි";
    this.q2="ක්ලච් එක  නිසි පරිදි ක්‍රියා නොකිරීමයි";
    this.q3="එන්ජිමේ වේගය නිසි පරිදි නොමැති වීමයි";
    this.q4="ගියර පෙට්ටියේ දෝෂයක්  ඇති බවයි";
  }
else if(this.questionNo==11){
    this.imageHidden=true;
    this.question_head="වාහනයේ ටයර් වල හුලං නියම ප්‍රමාණයට වැඩි වූ විට";
    this.q1="ටයරය තැනින් තැන වැඩි වැඩියෙන් ගෙවී යයි";
    this.q2="ටයරය ඉක්මනින් ගෙවී යයි";
    this.q3="ටයරය මැද ඉක්මනින් ගෙවී යයි";
    this.q4="ටයරය දෙපැත්ත ඉක්මනින් ගෙවී යයි";
    this.nextQue="අවසාන කරන්න";
  }
}
}
