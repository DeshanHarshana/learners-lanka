import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sounds } from 'src/app/common/sounds';

@Component({
  selector: 'app-paper2',
  templateUrl: './paper2.page.html',
  styleUrls: ['./paper2.page.scss'],
})
export class Paper2Page implements OnInit {
  private incorrectAnswer =new Audio(String(Sounds.incorrectAnswer));
  private correctAnswer=new Audio(String(Sounds.correctAnswer));
  answerarr=[1,4,1,3,4,4,1,3,2,3,2,4,5,3,2,2,3,2,3,4];
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

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    this.question_image="assets/paper2/1.JPG";
    this.question_head="මාර්ගය මත සලකුනු කර ඇති මෙම මාර්ග සලකුනෙන් දැක්වෙන්නේ";
    this.q1="දාවන තීරු සලකුනු";
    this.q2="මද්‍ය රේඛාව";
    this.q3="දකුනට හැරීම හැර හරහා යෑම තහනම් කරන ආයත රේකාව";
    this.q4="මාර්ගය හරහා ගමන් කිරීම තහනම් කරන ආයත රේඛාව";
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
    this.question_image="assets/paper2/2.JPG";
    this.question_head="වාහන ආලෝක සංඥා තිබෙන මෙම මංසන්ධියේ දී ";
    this.q1="වෑන් රථයට අවශ්‍ය නම් වමට  හැරවිය හැක";
    this.q2="වෑන් රථය අනිවාර්යයෙන් දකුණට හැරවිය යුතුයි ";
    this.q3="මෝටර් කාරයට අවශ්‍ය නම් දකුණට හැරවිය හැක";
    this.q4="මෝටර් කාරයට අවශ්‍ය නම් වමට හැරවිය හැක";
  }


else if(this.questionNo==2){
    this.question_image="assets/paper2/3.JPG";
    this.question_head="මාර්ගය හරස් අතට සළකුණු කර ඇති මෙම සළකුණෙන් අදහස් කරන්නේ ";
    this.q1="මාර්ගය ඉඩදෙනු රේඛාව ";
    this.q2="මාර්ගය බෙදී යන ස්ථානයක පිහිටුවන නැවතුම් රේඛාව ";
    this.q3="නවතිනු සංඥාවෙහි පිහිටුවන නැවතුම් රේඛාව  ";
    this.q4="වටරවුමක පිහිටුවන මාර්ගය ඉඩදෙනු රේඛාව ";
  }


else if(this.questionNo==3){
    this.question_image="assets/paper2/4.JPG";
    this.question_head="රූපයේ පෙන්වා තිබෙන T හැඩයේ මංසන්ධියට ඇතුළුවන මෙම රියදුරා තම  වාහනය ";
    this.q1="ප්‍රධාන මාර්ගයේ වාහන නොමැති නම් නතර කළයුතු නැත";
    this.q2="අනිවාර්යයෙන් නතර කළ යුතුය ";
    this.q3="දකුණට හරවන්නේ නම් පමණක් නතර කළ යුතුය ";
    this.q4="වමට හැරවීමේ දී නතර කළ යුතු නැත";
  }


else if(this.questionNo==4){
    this.question_image="assets/paper2/5.JPG";
    this.question_head="මාර්ගය මත හරස් අතට සළකුණු කර ඇති මෙම සළකුණෙන් අදහස් කරන්නේ ";
    this.q1="මාර්ගය ඉඩදෙනු රේඛාව ";
    this.q2="රථ වාහන සංඥා එළියකදී හෝ පොලීසියෙන් පාලනය වන අන්තර් ඡේදනයකදී නැවතීමේ රේඛාව  ";
    this.q3="නවතිනු සංඥාවේ පිහිටුවන නැවතුම් රේඛාව ";
    this.q4="වටරවුමක පිහිටුවනු ලබන මාර්ගය ඉඩදෙනු රේඛාව ";
  }


else if(this.questionNo==5){
    this.question_image="assets/paper2/6.JPG";
    this.question_head="මාර්ග සංඥාවෙන් දැක්වෙන්නේ ";
    this.q1="ඉදිරියෙන් මාර්ගය වසා ඇත ";
    this.q2="දුම්රිය හරස් මාර්ගය ඉදිරියෙනි ";
    this.q3="ආරක්ෂා කර නොමැති දුම්රිය හරස් මාර්ගය ";
    this.q4="ආරක්ෂා කර නොමැති දුම්රිය හරස් මාර්ගය ඉදිරියෙනි ";
  }


else if(this.questionNo==6){
    this.question_image="assets/paper2/7.JPG";
    this.question_head="මාර්ග  සංඥාවෙන් දැක්වෙන්නේ ";
    this.q1="අනිවාර්ය වට රවුම";
    this.q2="ඇතුල්වීම තහනම් ";
    this.q3="බස් හා ලොරි  සදහා පාර වසා ඇත ";
    this.q4="මාර්ගය වසා ඇත ";
  }

else if(this.questionNo==7){
    this.question_image="assets/paper2/8.JPG";
    this.question_head="මාර්ග සංඥාවෙන් දැක්වෙන්නේ ";
    this.q1="ලිස්සන සුලු මාර්ගය ඉදිරියෙනි ";
    this.q2="වංගු සහිත මාර්ගය ඉදිරියෙනි ";
    this.q3="අනතුරුදායක මංසන්ධිය ඉදිරියෙනි ";
    this.q4="ඉදිරියෙන් මාර්ගය පටුය";
  }


else if(this.questionNo==8){
    this.question_image="assets/paper2/9.JPG";
    this.question_head="මාර්ග සංඥාවෙන් දැක්වෙන්නේ ";
    this.q1="Y හැඩයේ මංසන්ධිය ඉදිරියෙනි ";
    this.q2="ඉදිරියෙන් මාර්ගය පටුය";
    this.q3="ද්විත්ව රථ මාර්ගයේ අවසානය ඉදිරියෙනි ";
    this.q4="පටුපාලම ඉදිරියෙනි ";
  }


else if(this.questionNo==9){
    this.question_image="assets/paper2/10.JPG";
    this.question_head="මාර්ග සංඥාවෙන් දැක්වෙන්නේ ";
    this.q1="අනිවාර්ය වටරවුම ඉදිරියෙනි ";
    this.q2="අනිවාර්ය වටරවුම ";
    this.q3="වටරවුම ඉදිරියෙනි ";
    this.q4="වටරවුම";
  }


else if(this.questionNo==10){
    this.question_image="assets/paper2/11.JPG";
    this.question_head="මාර්ග සංඥාවෙන් දැක්වෙන්නේ ";
    this.q1="වම් පැත්තට හරවා නවත්වන්න ";
    this.q2="වම් පැත්තට හැරවිය යුතුය ";
    this.q3="වම් පැත්තට හැරවීම සදහා ප්‍රමුඛතාවය";
    this.q4="ඉදිරියෙන් වම් පැත්තට හැරවිය යුතුය ";
  }


else if(this.questionNo==11){
    this.question_image="assets/paper2/12.JPG";
    this.question_head="මාර්ග සංඥාවෙන් දැක්වෙන්නේ ";
    this.q1="තොරතුරු සංඥාවකි";
    this.q2="අනතුරු හැගවීමේ සංඥාවකි";
    this.q3="තහනම් සංඥාවකි";
    this.q4="විධාන සංඥාවකි";
  }


else if(this.questionNo==12){
    this.question_image="assets/paper2/13.JPG";
    this.question_head="මාර්ග සංඥාවෙන් දැක්වෙන්නේ ";
    this.q1="වම් පැත්තට ද්විත්ව වංගුව ඉදිරියෙනි ";
    this.q2="වම් පැත්තට වැලමිටි වංගුව ඉදිරියෙනි ";
    this.q3="වම් පැත්තට වංගුව ඉදිරියෙනි ";
    this.q4="U හැඩයට හැරවිය හැකි ස්ථානය ඉදිරියෙනි ";
  }


else if(this.questionNo==13){
    this.question_image="assets/paper2/14.JPG";
    this.question_head="මාර්ග සංඥාවෙන් දැක්වෙන්නේ ";
    this.q1="සියලුම වාහන සදහා මාර්ගය වසා ඇත ";
    this.q2="මාර්ගය වසා ඇත ";
    this.q3="කාර් සහ යතුරු පැදි සදහා මාර්ගය වසා ඇත ";
    this.q4="කාර් සහ යතුරු පැදි ඇතුල්වීම තහනම් ";
  }


else if(this.questionNo==14){
    this.question_image="assets/paper2/15.JPG";
    this.question_head="මාර්ග සංඥාවෙන් දැක්වෙන්නේ ";
    this.q1="වටරවුම ඉදිරියෙනි ";
    this.q2="රථ වාහන නවත්වන ස්ථානය";
    this.q3="නවතිනු";
    this.q4="ඉදිරියෙන් නවතිනු";
  }


else if(this.questionNo==15){
    this.question_image="assets/paper2/16.JPG";
    this.question_head="මාර්ග සංඥාවෙන් දැක්වෙන්නේ ";
    this.q1="ද්විත්ව රථ මාර්ගය ආරම්භය ඉදිරියෙනි ";
    this.q2="ඉදිරියේදී මාර්ගය පටුය";
    this.q3="ද්විත්ව රථ මාර්ගය අවසානය ඉදිරියෙනි ";
    this.q4="පටු පාලම ඉදිරියෙනි ";
  }


else if(this.questionNo==16){
    this.question_image="assets/paper2/17.JPG";
    this.question_head="මාර්ග සංඥාවෙන් දැක්වෙන්නේ ";
    this.q1="වේග සීමාව ";
    this.q2="සාමාන්‍ය වේගය ";
    this.q3="අවම වේගය ";
    this.q4="නගර සීමාව තුළ වේග සීමාව ";
  }


else if(this.questionNo==17){
    this.question_image="assets/paper2/18.JPG";
    this.question_head="මාර්ග සංඥාවෙන් දැක්වෙන්නේ ";
    this.q1="ඉදිරියෙන් මංසන්ධියක්";
    this.q2="ඔත්තේ දිනවල නැවැත්වීම හා පැටවීම තහනම් ";
    this.q3="ඉරට්ටේ දිනවල නැවැත්වීම හා පැටවීම තහනම් ";
    this.q4="නැවැත්වීම හා පැටවීම තහනම් ";
  }


else if(this.questionNo==18){
    this.question_image="assets/paper2/19.JPG";
    this.question_head="පෙන්වා ඇති රථ වාහන මාර්ග සංඥා ලාම්පු වල ඊළඟට දැල්වෙන වර්ණය කුමක් ද?";
    this.q1="කොළ";
    this.q2="කහ";
    this.q3="රතු සහ කහ";
    this.q4="කහ සහ කොළ";
  }


else if(this.questionNo==19){
    this.question_image="assets/paper2/20.JPG";
    this.question_head="මාර්ග සංඥාවෙන් දැක්වෙන්නේ ";
    this.q1="ඉදිරියෙන් එන වාහන වලට ප්‍රමුඛතාවය අවසන් ";
    this.q2="ඇතුල්වීම තහනම් ";
    this.q3="වාහන ඉස්සර කිරීම තහනම් ";
    this.q4="ඉරට්ටේ දිනවල නැවැත්වීම තහනම් ";
  }}
}
