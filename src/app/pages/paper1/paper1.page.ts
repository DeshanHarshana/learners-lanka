import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sounds } from 'src/app/common/sounds';

@Component({
  selector: 'app-paper1',
  templateUrl: './paper1.page.html',
  styleUrls: ['./paper1.page.scss'],
})
export class Paper1Page implements OnInit {
  private incorrectAnswer =new Audio(String(Sounds.incorrectAnswer));
  private correctAnswer=new Audio(String(Sounds.correctAnswer));
  answerarr=[1,4,1,3,4,2,1,3,4,3,2,4,2,3,4,1,1,2,2,1]
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
    this.question_image="assets/paper1/1.PNG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="ඉරට්ටෙ දින වල වාහන නවතා තැබීම තහනම්";
    this.q2="ඔත්තේ දින වල වාහන නවතා තැබීම තහනම්";
    this.q3="ඔත්තේ දින වල වාහන ඇතුල් වීම තහනම්";
    this.q4="ඉරට්ටෙ දින වල වාහන ඇතුල් වීම තහනම්";
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
    this.question_image="assets/paper1/2.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="ඉදිරියෙන් නවතිනු";
    this.q2="එකිනෙක හරහා ගමන් කරන මාර්ගය ඉදිරියෙනි";
    this.q3="අනිවාර්ය වටරවුම ඉදිරියෙනි";
    this.q4="වටරවුම ඉදිරියෙනි";
  }else if(this.questionNo==2){
    this.question_image="assets/paper1/3.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="මාර්ගය ඉඩදෙනු";
    this.q2="අනිවාර්ය ත්‍රිකෝනාකාර මංසන්ධිය ඉදිරියෙනි";
    this.q3="ඉදිරියෙන් මාර්ගය ඉඩදෙනු";
    this.q4="ප්‍රධාන මාර්ගය ඉදිරියෙනි";
  }
  else if(this.questionNo==3){
    this.question_image="assets/paper1/4.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="සතුන්ගේ අභය භූමිය ඉදිරියෙනි";
    this.q2="ගවයන් ඇති කරන ගොවිපල ඉදිරියෙනි";
    this.q3="ගවයන් හෝ වෙනත් සතුන් මාර්ගය හරහා ගමන් කිරීමට ඉඩ දී ඇති ස්තානය ඉදිරියෙනි";
    this.q4="ගවයන් සදහා මාර්ගය හරහා ගමන් කිරීමට ඉඩ දී ඇති ස්තානය ඉදිරියෙනි";
  }
  else if(this.questionNo==4){
    this.question_image="assets/paper1/5.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="දකුනු පැත්තට ද්විත්ව වංගුව ඉදිරියෙනි";
    this.q2="U හැඩයට හැරවිය හැකි ස්තානය ඉදිරියෙනි";
    this.q3="දකුනු පැත්තට වංගුව ඉදිරියෙනි";
    this.q4="දකුනු පැත්තට වැලමිටි වංගුව ඉදිරියෙනි";
  }
  else if(this.questionNo==5){
    this.question_image="assets/paper1/6.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="ඉදිරියෙන් හතරමං හන්දිය";
    this.q2="ප්‍රමුඛතා මාර්ගය";
    this.q3="ප්‍රමුඛතා මාර්ගය ඉදිරියෙනි";
    this.q4="මංසන්දි කොටුව";
  }
  else if(this.questionNo==6){
    this.question_image="assets/paper1/7.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="වම් පැත්තෙන් රත වාහන ප්‍රදාන මාර්ගයට එක්වන සන්දිය ඉදිරියෙනි";
    this.q2="පලමුවෙන් වම් පැත්තට විහිදෙන විසම සංදිය ඉදිරියෙනි";
    this.q3="වම් පැත්තෙන් එන රත වාහන සදහා ප්‍රමුකතාව දෙනු";
    this.q4="Y හැඩයේ මංසන්දිය ඉදිරියෙනි";
  }
  else if(this.questionNo==7){
    this.question_image="assets/paper1/8.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="ලමයින් මාරු වෙන ස්තානය";
    this.q2="අන්ද මිනිසුන් මාරු වෙන ස්තානය";
    this.q3="ලමයින් මාරු වෙන ස්තානය ඉදිරියෙනි";
    this.q4="පාසල ඉදිරියෙනි";
  }
  else if(this.questionNo==8){
    this.question_image="assets/paper1/9.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="පදිකයන් මාරු වෙන ස්තානය";
    this.q2="පොලිස් ස්තානය";
    this.q3="ඉන්දන පිරවුම් හල";
    this.q4="වාහන නවත්වන ස්තානය";
  }
  else if(this.questionNo==9){
    this.question_image="assets/paper1/10.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="දකුනු පැත්තට ද්විත්ව වංගුව ඉදිරුයෙනි";
    this.q2="ඉදිරියෙන් දකුනට හරවනු";
    this.q3="දකුනු පැත්තට වංගුව ඉදිරියෙනි";
    this.q4="දකුනු පැත්තට වැලමිටි වංගුව ඉදිරියෙනි";
  }
  else if(this.questionNo==10){
    this.question_image="assets/paper1/11.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="තහනම් සංඥාවකි";
    this.q2="සීමාකාරි සංඥාවකි";
    this.q3="විදාන සංඥාවකි";
    this.q4="අනතුරු ඇගවීමේ සංඥාවකි";
  }
  else if(this.questionNo==11){
    this.question_image="assets/paper1/12.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="සියලු වාහන සදහා පාර වසා ඇත";
    this.q2="ඔත්තෙ දින වල වාහන නැවැත්වීම තහනම්";
    this.q3="නැවැත්වීම හා පැටවීම තහනම්";
    this.q4="වාහන නැවැත්වීම තහනම්";
  }
  else if(this.questionNo==12){
    this.question_image="assets/paper1/13.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="ඇක්සලය මත පැටවිය හැකි බර සීමාව";
    this.q2="වේග සීමාවෙ අවසානය";
    this.q3="වේග සීමාවෙ ආරම්භය";
    this.q4="වේග සීමාව";
  }
  else if(this.questionNo==13){
    this.question_image="assets/paper1/14.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="පදිකයන් සදහා වෙන්කල මාර්ගය ආරම්භය";
    this.q2="පදිකයන් සදහා ඉඩ දෙන්න";
    this.q3="පදිකයන් මාරු වෙන ස්තානය";
    this.q4="පදික මාරුව ඉදිරියෙනි";
  }
  else if(this.questionNo==14){
    this.question_image="assets/paper1/15.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="මාර්ගය ලිස්සන සුලු ස්තානය ඉදිරියෙනි";
    this.q2="ඉහලට අවදානම් බෑවුම ඉදිරියෙනි";
    this.q3="කාර් රත ලිස්සනසුලු ස්තානය ඉදිරියෙනි";
    this.q4="පහතට අවදානම් බෑවුම ඉදිරියෙනි";
  }
  else if(this.questionNo==15){
    this.question_image="assets/paper1/16.JPG";
    this.question_head="මාර්ග සංඥාවෙන් අදහස් කෙරෙන්නේ";
    this.q1="Y හැඩයේ මංසන්දිය ඉදිරියෙනි";
    this.q2="ඉදිරියෙන් මාර්ගය පටුය";
    this.q3="ප්‍රදාන මාර්ගයට දෙපසින් රත වාහන පිවිසෙන මංසන්දිය ඉදිරියෙනි";
    this.q4="ද්විත්ව රතවාහන මාර්ගයේ ආරම්භය ඉදිරියෙනි";
  }

  else if(this.questionNo==16){
    this.question_image="assets/paper1/17.JPG";
    this.question_head="රූපයෙන් පෙන්වා ඇති මංසන්දියේදී";
    this.q1="මෝටර් කාරය අනිවාර්‍යෙන්ම ඉදිරියට යා යුතුය";
    this.q2="ත්‍රීරෝද රතයට කෙලින්ම ඉදිරියට යා හැක";
    this.q3="ත්‍රීරෝද රතයට දකුනට හැරවීම හෝ කෙලින්ම ඉදිරියට යා හැක";
    this.q4="මෝටර් කාරයට කෙලින්ම ඉදිරියට යාමට හෝ දකුනට හැරවිය හැක";
  }
  else if(this.questionNo==17){
    this.question_image="assets/paper1/18.JPG";
    this.question_head="මෙහි තිබෙන මංසන්දියේදී වමට හැරවීමට අදහස් කරන්නේ නම් පිලිවෙලින් A, B හා C වලදී කල යුතු වන්නේ";
    this.q1="තීරණය, සංඥා කිරීම සහ ක්‍රියාත්මක කිරිම";
    this.q2="නිරීක්ශණය, තීරණය කිරීම සහ ක්‍රියාත්මක කිරීම";
    this.q3="සංඥා කිරීම, තීරණය කිරීම සහ ක්‍රියාත්මක කිරීම";
    this.q4="ඉහත සියල්ල නිවැරදිය";
  }
  else if(this.questionNo==18){
    this.question_image="assets/paper1/19.JPG";
    this.question_head="පෙන්වා ඇති රත වාහන මාර්ග සංඥා ලාම්පුවල ර්‍ර්ලගට දැල්වෙන වර්ණ්‍ය කුමක්ද?";
    this.q1="රතු හා කහ";
    this.q2="රතු";
    this.q3="කොල හා කහ";
    this.q4="කොල";
  }
  else if(this.questionNo==19){
    this.question_image="assets/paper1/20.JPG";
    this.question_head="පෙන්වා ඇති පොලිස් නිලදරියාගේ විදානය කුමක්ද?";
    this.q1="ඉදිරියෙන් හා පසුපසින් පැමිණෙන වාහන නවතිනු";
    this.q2="පසුපසින් පැමිණෙන වාහන නවතිනු";
    this.q3="නවතිනු";
    this.q4="ඉදිරියෙන් පැමිණෙන වාහන නවතිනු";
    this.nextQue="අවසාන කරන්න";
  }
}
}
