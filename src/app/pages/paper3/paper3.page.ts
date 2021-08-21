import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sounds } from 'src/app/common/sounds';

@Component({
  selector: 'app-paper3',
  templateUrl: './paper3.page.html',
  styleUrls: ['./paper3.page.scss'],
})
export class Paper3Page implements OnInit {
  private incorrectAnswer =new Audio(String(Sounds.incorrectAnswer));
  private correctAnswer=new Audio(String(Sounds.correctAnswer));
  answerarr=[2,4,4,4,2,4,3,4,1,3,4,4,3,4,3,3,2,4,4,2]
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
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    this.question_image="assets/paper3/1.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="ප්‍රදාන මාර්ගය ඉදිරියෙනි";
    this.q2="ඉදිරියෙන් මාර්ගය ඉඩදෙනු";
    this.q3="ත්‍රිකෝනාකාර මංසදිය ඉදිරියෙනි";
    this.q4="මාර්ගය ඉඩ දෙනු";
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
    this.question_image="assets/paper3/2.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="කලුගල් කඩන ස්තානය ඉදිරියෙනි";
    this.q2="අවදානම් බැවුම ඉදිරියෙනි";
    this.q3="මාර්ගය අලුත්වැඩියා කරන ස්තානය ඉදිරියෙනි";
    this.q4="ගල් පර්වත කැබලි වැටෙන ස්තානය ඉදිරියෙනි";
  }else if(this.questionNo==2){
    this.question_image="assets/paper3/3.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="ඉරට්ටෙ දින වල වාහන ඇතුල් වීම තහනම්";
    this.q2="ඔත්තෙ දින වල වාහන ඇතුල් වීම තහනම්";
    this.q3="ඉරට්ටෙ දින වල වාහන නැවැත්වීම වීම තහනම්";
    this.q4="ඔත්තෙ දින වල වාහන නැවැත්වීම වීම තහනම්";
  }
  else if(this.questionNo==3){
    this.question_image="assets/paper3/4.JPG";
    this.question_head="පෙන්වා ඇති පොලිස් නිලදාරියාගේ විදානය කුමක්ද?";
    this.q1="පසුපසින් එන වාහන නවතිනු";
    this.q2="ඉදිරියෙන් හා පසුපසින් එන වාහන නවතිනු";
    this.q3="ඉදිරියට එනු";
    this.q4="නවතිනු";
  }
  else if(this.questionNo==4){
    this.question_image="assets/paper3/5.JPG";
    this.question_head="මාර්ගය මත හරස් අතට සලකුනු කර ඇති මෙම සලකුනෙන් අදහස් කරන්නෙ";
    this.q1="ඉඩ දීමෙ රේඛාව";
    this.q2="රතවාහන සංඥා ආලෝක සංඥා හෝ පොලීසියෙන් පාලනය වන මාර්ගය බෙදීයන ස්තානයක පිහිටුවන නැවතුම් රේඛාව";
    this.q3="නැවතීමේ සංඥාව අසල නැව්තීමේ රේඛාව";
    this.q4="වටවංගුව අසල ඉඩදීමෙ රේඛාව";
  }
  else if(this.questionNo==5){
    this.question_image="assets/paper3/6.JPG";
    this.question_head="මාර්ගය මත හරස් අතට සලකුනු කර ඇති මෙම සලකුනෙන් අදහස් කරන්නෙ";
    this.q1="මාර්ගය බෙදී යන ස්තානයක පිහිටවන නැවතුම් රේඛාවයි";
    this.q2="වට රවුමක පිහිටවන මාර්ගය ඉඩදෙනු රේඛාව";
    this.q3="නවතිනු සංඥාවේ පිහිටු වන නැවතීමේ රේඛාවයි";
    this.q4="මාර්ගය ඉඩදෙනු රේඛාවයි";
  }
  else if(this.questionNo==6){
    this.question_image="assets/paper3/7.JPG";
    this.question_head="මාර්ගය මත හරස් අතට සලකුනු කර ඇති මෙම සලකුනෙන් අදහස් කරන්නෙ";
    this.q1="මංතීරු සලකුන";
    this.q2="මාර්ගය හරහා ගමන් කිරිමට තහනම් කිරීමේ ආයත රේඛාව";
    this.q3="දකුණට හැරවීම හැර හරහා යෑම තහනම් කිරීමේ ආයත රේඛාව";
    this.q4="මද්‍ය රේඛාව";
  }
  else if(this.questionNo==7){
    this.question_image="assets/paper3/8.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="ද්විත්ව මාර්ගය ඉදිරියෙනි";
    this.q2="පටු පාලමකි";
    this.q3="ඉදිරියේ මාර්ගය පටු බවයි";
    this.q4="පටු පාලම ඉදිරියෙන් ඇති බවයි";
  }
  else if(this.questionNo==8){
    this.question_image="assets/paper3/9.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="පදිකයන් මාරු වෙන ස්තානය ඉදිරියෙන් ඇති බවයි";
    this.q2="පදික මාරුව ඉදිරියෙන් ඇති බවයි";
    this.q3="මගීන් මාරුවෙන ස්තානයක් ඉදිරියෙන් ඇති බවයි";
    this.q4="ළමයින් මාරුවෙන ස්තානය ඉදිරියෙන් බවයි";
  }
  else if(this.questionNo==9){
    this.question_image="assets/paper3/10.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="ඔත්තෙ දිනවල ඇතුල් වීම තහනම් බවයි";
    this.q2="ඔත්තේ දිනවල නැවැත්වීම තහනම් බවයි";
    this.q3="ඇතුල්වීම තහනම් බවයි";
    this.q4="විරුද්ද දිශාවෙන් වාහන පැමිණිය නොහැකි බවයි";
  }
  else if(this.questionNo==10){
    this.question_image="assets/paper3/11.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="ප්‍රදාන පාර ඉදිරියෙන් ඇති බවයි";
    this.q2="ත්‍රිකෝනාකාර මංසන්දිය ඉදිරියෙන් ඇති බවයි";
    this.q3="ඉදිරියෙන් ඉඩ දෙනු යන අදහසයි";
    this.q4="මාර්ගය ඉඩදෙනු යන අදහසයි";
  }
  else if(this.questionNo==11){
    this.question_image="assets/paper3/12.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="වාහන ඇතුල්වීම සීමා කර ඇති බවයි";
    this.q2="ඉදිරියෙන් ඉඩදෙනු යන අදහසයි";
    this.q3="ප්‍රමුඛතා මාර්ගය බවයි";
    this.q4="ප්‍රමුඛතා මාර්ගයේ අවසානය බවයි";
  }
  else if(this.questionNo==12){
    this.question_image="assets/paper3/13.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="ඉදිරියෙන් ප්‍රදාන මාර්ගයට ඇතුල් වෙන බවයි";
    this.q2="ඉදිරියෙන් එන වාහන වලට ප්‍රමුඛතාවය දිය යුතු බවයි";
    this.q3="ඉදිරියට යන වාහන වලට ප්‍රමුඛතාවය දිය යුතු බවයි";
    this.q4="ඉදිරියෙන් පැමිනෙන වාහනයෙන් ප්‍රවේසම් වන්න යන අදහසයි";
  }
  else if(this.questionNo==13){
    this.question_image="assets/paper3/14.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="දුම්රිය ඉදිරියෙන් පැමිනිය හැකි බැවින් ප්‍රවේසම් වන්න යන්නයි";
    this.q2="දුම්රියෙන් ප්‍රවේසම් විය යුතු යන්නයි";
    this.q3="ආරක්ශා කර නොමැති දුම්රිය හරස් මාර්ගයක් බවයි";
    this.q4="ආරක්ශා කර නොමැති දුම්රිය හරස් මාරගය ඉදිරියෙන් බවයි";
  }
  else if(this.questionNo==14){
    this.question_image="assets/paper3/15.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="ඉදිරියෙන් මාර්ගය අවසාන බවයි";
    this.q2="වැලමිට වංගුව ඉදිරියෙන් ඇති බවයි";
    this.q3="U හැඩයට හිටින සේ හැරවීම තහනම් යන අදහසයි";
    this.q4="දකුනු පැත්තට හැරවීම තහනම් බවයි";
  }
  else if(this.questionNo==15){
    this.question_image="assets/paper3/16.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="වටරවුම ඉදිරියෙන් ඇති බවයි";
    this.q2="විදුලි ආලෝක සංඥාව යන අදහසයි";
    this.q3="නවතිනු යන අදහසයි";
    this.q4="ඉඩදෙනු යන අදහසයි";
  }

  else if(this.questionNo==16){
    this.question_image="assets/paper3/17.JPG";
    this.question_head="මෙම සලකුනෙන් දැනුම් දෙන්නෙ";
    this.q1="නාගරික ප්‍රදේශයකට ඇතුල් වන බවයි";
    this.q2="එම ප්‍රදේශය තුල පැදවිය හැකි උපරිම වේගය බවයි";
    this.q3="එම ප්‍රදේශය තුල පැදවිය හැකි සාමාන්ය වේගය බවයි";
    this.q4="සදහන් වේග සීමාවෙ අවසානය බවයි";
  }
  else if(this.questionNo==17){
    this.question_image="assets/paper3/18.JPG";
    this.question_head="මෙම සංඥාව";
    this.q1="තහනම් සංඥාවකි";
    this.q2="අනතුරු ඇගවීමේ සංඥාවකි";
    this.q3="පාලක සංඥාවකි";
    this.q4="තොරතුරු සංඥාවකි";
  }
  else if(this.questionNo==18){
    this.question_image="assets/paper3/19.JPG";
    this.question_head="මෙම සලකුනෙන් දැක්වෙන්නෙ";
    this.q1="දුම්රිය මාර්ගයක් ඉදිරියෙන් ඇති බවයි";
    this.q2="රෝහලක් ඉදිරියෙන් ඇති බවයි";
    this.q3="පල්ලියක් ඉදිරියෙන් ඇති බවයි";
    this.q4="එකිනෙක හරහා ගමන් කරන මාර්ගය ඉදිරියෙනි";
  }
  else if(this.questionNo==19){
    this.question_image="assets/paper3/20.JPG";
    this.question_head="මෙම සලකුනෙන් දැක්වෙන්නෙ";
    this.q1="දකුනට හැරවිය යුතුය";
    this.q2="වමට වංගුව ඉදිරියෙනි";
    this.q3="දකුනට වංගුව ඉදිරියෙනි";
    this.q4="වමට හැරවිය යුතුය";
    this.nextQue="අවසාන කරන්න";
  }
}
}
