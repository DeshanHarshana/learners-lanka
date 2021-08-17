import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sounds } from 'src/app/common/sounds';

@Component({
  selector: 'app-paper4',
  templateUrl: './paper4.page.html',
  styleUrls: ['./paper4.page.scss'],
})
export class Paper4Page implements OnInit {
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
  imageHidden:boolean=false;
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    this.question_image="assets/paper4/1.JPG";
    this.question_head="මෙම සළකුණෙන් දැක්වෙන්නේ";
    this.q1="Y හැඩයට මංසන්ධිය ඉදිරියෙන් ඇතිබවයි";
    this.q2="ඉදිරියෙන් ප්‍රධාන මාර්ගය ඇති බවයි";
    this.q3="වම් පැත්තෙන් එන වාහන වලට ප්‍රමුඛතාවය දෙන ලෙස දැනුම් දීමකි";
    this.q4="වම් පැත්තෙන් එන රථ වාහන  ප්‍රධාන මාර්ගයට එක්වන සන්දිය ඉදිරියෙනි";
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
    this.question_image="assets/paper4/2.JPG";
    this.question_head="මෙම සළකුණෙන් දැක්වෙන්නේ";
    this.q1="ඉදිරියෙන් දකුණට හැරවිය යුතුය";
    this.q2="දකුණු පැත්තට වැලමිටි වංගුව ඉදිරියෙනි";
    this.q3="ඉදිරියෙන් U හැඩයට හැරවිය හැක";
    this.q4="වම් පැත්තට වැලමිටි වංගුව ඉදිරියෙනි";
  }



else if(this.questionNo==2){
    this.question_image="assets/paper4/3.JPG";
    this.question_head="මෙම සළකුණෙන් දැක්වෙන්නේ";
    this.q1="ඔත්තේ දිනවල වාහන නැවැත්වීම තහනම් බවයි";
    this.q2="මාර්ගය වසා ඇති බවයි";
    this.q3="වාහන නැවැත්වීම තහනම් බවයි";
    this.q4="ඉදිරියෙන් වටරවුමක් ඇති බවයි";
  }


else if(this.questionNo==3){
    this.question_image="assets/paper4/4.JPG";
    this.question_head="මෙම සළකුණෙන් දැක්වෙන්නේ";
    this.q1="ඉරට්ටේ දිනවල වාහන නැවැත්වීම තහනම් බවයි";
    this.q2="වාහන ඇතුල් ඇතුල් වීම තහනම් බවයි";
    this.q3="වාහන නැවැත්වීම තහනම් බවයි";
    this.q4="වාහන නැවත්වීම සහ පැටවීම තහනම් බවයි";
  }


else if(this.questionNo==4){
    this.question_image="assets/paper4/5.JPG";
    this.question_head="මෙම සළකුණෙන් දැක්වෙන්නේ";
    this.q1="ඉදිරියෙන් ආපසු හරවන්න";
    this.q2="වම් පැත්තට හරවන්න";
    this.q3="මේ පැත්තෙන් පසු කරන්න";
    this.q4="ඉදිරියෙන් වම් පැත්තට හරවන්න";
  }


else if(this.questionNo==5){
    this.question_image="assets/paper4/6.JPG";
    this.question_head="මෙම සළකුණෙන් දැක්වෙන්නේ";
    this.q1="ඉදිරියෙන් දකුණු පැත්තට හැරවිය යුතුයි";
    this.q2="වාහන නවතා තැබීමට පුළුවන් බවයි";
    this.q3="ඉදිරියෙන් අනතුරක් ඇති බැවින් එමින් ධාවනය කරන්න යන්නයි";
    this.q4="නවතිනු සංඥාවයි";
  }


else if(this.questionNo==6){
    this.imageHidden=true;
    this.question_head="ශ්‍රී ලංකාවේ මාර්ග නීති ගත සංග්‍රහයේ අනතුරු ඇඟවීමේ සංඥා දක්වා ඇත්තේ";
    this.q1="නිල් පසුබිමෙහි සුදු වර්ණයෙනි";
    this.q2="රතු පසුබිමෙහි සුදු වර්ණයෙනි";
    this.q3="කහ පසුබිමෙහි කළු වර්ණයෙනි";
    this.q4="සුදු පසුබිමෙහි රතු වර්ණයෙනි";
  }


else if(this.questionNo==7){
  this.imageHidden=true;
    this.question_head="වට රවුමක මූලික නීතිය වනුයේ";
    this.q1="ඔබට දකුණින් පැමිණෙන රථ වාහන වලට ඉඩ දිය යුතුය";
    this.q2="ඔබට වම් පසින් හෝ ආසන්නව පැමිණෙන රථ වාහන වලට ඉඩ දිය යුතුය ";
    this.q3="අධික රථවාහන තදබදය සහිත දිශාවෙන් පැමිණෙන රථ වාහන වලට ඉඩ දිය යුතුය ";
    this.q4="ඔබට වම් පසින් හෝ ආසන්නව දකුණින් පැමිණෙන රථ වාහන වලට ඉඩ දිය යුතුය";
  }


else if(this.questionNo==8){
  this.imageHidden=true;
    this.question_head="එක් දිශාවකට මන්තීරු තුනක් සහිත මාර්ගයක ඔබගේ වාහනය ඉදිරියට ගමන් කරන අවස්ථාවකදී ඔබ විසින් තෝරාගත යුතු මංතීරුව වනුයේ";
    this.q1="මාර්ගයේ මැද තීරුව හෝ දකුණු පස මංතීරුවය";
    this.q2="මාර්ගයේ දකුණු පස මං තීරුවය";
    this.q3="මාර්ගයේ වම්පස මං තීරුවය";
    this.q4="මාර්ගයේ මැද මං තීරුවය";
  }


else if(this.questionNo==9){
  this.imageHidden=true;
    this.question_head="ඔබගේ වාහනය හා ඔබට ඔබට ඉදිරියෙන් ධාවනය වන වාහනය අතර ප්‍රමාණවත් දුරක් තබාගත යුත්තේ";
    this.q1="ඔබට ඉදිරියෙන් ධාවනය වන වාහනයේ රියදුරු තැන හදිසියේ නතර කළහොත්එම වාහනය පසුකර යාමට ඔබට වැඩි වැඩි වේලාවක් ලැබෙන නිසාය";
    this.q2="ඔබට ඉදිරියෙන් ධාවනය වන වාහනයේ රියැදුරු තැන හදිසියේ නතර කළහොත්  ඔබට ඔබගේ වාහනය ආරක්ෂාකාරී ආරක්ෂාකාරීලෙස නතර කරගැනීමට හැකිවන නිසාය";
    this.q3="ඔබට ඉදිරියෙන් ධාවනය වන වාහනයට ඉස්සර කිරීමට වැඩි ඉඩක් ලැබෙන නිසාය";
    this.q4="ඔබට ඉදිරියෙන් ධාවනය වන වාහන පසුපසින් ධාවනය කිරීම ඉතාම පහසු වන නිසාය";
  }


else if(this.questionNo==10){
  this.imageHidden=true;
    this.question_head="වාහනයක අවදානම් හැඟවීමේ ලාම්පු (Hazard Lamps ) පාවිච්චි කළ යුත්තේ ඇයි";
    this.q1="වාහනය අබල තත්ත්වයකට පත්ව නවතා තිබියදී පමණි";
    this.q2="වාහනයක් හදිසි තත්වයක් නිසා ධාවනය කරන බව දැන්වීම සඳහාය";
    this.q3="හන්දිය කදී වාහනයක්  කෙලින්ම ධාවනය ධාවනය කිරීමට අදහස් අදහස් කරන කරන අවස්තාවේ දීය";
    this.q4="ප්‍රමුඛත්වය ලබා ගැනීමටය";
  }


else if(this.questionNo==11){
  this.imageHidden=true;
    this.question_head="වෙනත් වාහනයක් විසින් ඔබගේ වාහනය පසුකර යන අවස්ථාවකදී";
    this.q1="ඔබ පසුකර යාමට ඉඩ දීමට කැමැත්තක් නොදක්වන්නේ නම් ඔබගේ වාහනය දකුණු පස සංඥා  දැල්විය යුතුය";
    this.q2="ඔබගේ වාහනය අඩු ගියරයකට යොදා නතර කිරීමට සූදානම් විය යුතුය";
    this.q3="ඔබගේ වාහනය වේගය වැඩි නොකර පසු කරන්නාට ඔබගේ වාහනය වාහනය පසුකර යාමට ඉඩ දිය යුතුය";
    this.q4="ඔබ පසුකර යාමට ඉඩ දීමට කැමැත්තක් නොදක්වන්නේ නම් ඔබට වාහනයේ වේගය වැඩි වැඩි කළ හැක";
  }


else if(this.questionNo==12){
  this.imageHidden=true;
    this.question_head="මංසන්ධි කොටුව සලකුණු කර ඇති ස්ථානයකදී";
    this.q1="ඔබ කෙලින්ම ඉදිරියට ගමන් කරන්නේ නම් ඔබට මංසන්ධි කොටුවට ඇතුළු විය හැක";
    this.q2="දකුණට හැරවීමේදී හැර පිට වීමට ඇති මාර්ගය අවහිර නම් මංසන්ධි කොටුව තුලට ඇතුල් නොවිය යුතුය ";
    this.q3="දකුණට හැරවීමට හැර ඕනෑම අවස්ථාවකදී ඔබට මංසන්ධි කොටුව තුලට ඇතුල් විය හැක";
    this.q4="ඕනෑම අවස්ථාවකදී ඔබට මංසන්ධි කොටුව තුලට ඇතුල් විය හැක";
  }


else if(this.questionNo==13){
  this.imageHidden=true;
    this.question_head="වාහනයක් නතර කර තැබිය හැකි ස්ථානයක් වන්නේ";
    this.q1="මංසන්ධියක සිට මීටර් 25ක සීමාවෙන් පිටතය";
    this.q2="බස් රථ නැවතුම ක සිට මීටර් 20 ක සීමාවෙන් පිටතය";
    this.q3="පා ගමනින් මාරුවන ස්ථානයක දඟර ප්‍රදේශයේ හෝ එහි සිට මීටර් 10 ක සීමාවෙන් පිටතය";
    this.q4="ගිනි නිවන ජල නළයක සිට මීටර් 10 ක සීමාවෙන් පිටතය";
  }


else if(this.questionNo==14){
  this.imageHidden=true;
    this.question_head="ඔබ වෙනත් වාහනයක් ඉස්සර නොකළ යුත්තේ";
    this.q1="ආරෝග්‍ය ශාලාවක් ඉදිරියේ හෝ එයට ලඟා වන අවස්ථාවකදීය";
    this.q2="උසාවියක් ඉදිරියේ හෝ එයට ලඟා වන අවස්ථාවකදීය";
    this.q3="මාර්ගය මත පිහිටා ඇති කඩ ඉරි නොකැපෙන සේ ය";
    this.q4="පදික මාරුවක් හෝ එයට ලඟා වන අවස්ථාවකදී ය";
  }



else if(this.questionNo==15){
  this.imageHidden=true;
    this.question_head="ඔබගේ වාහනය මාර්ග අනතුරකට භාජනය වුවහොත්";
    this.q1="අනතුරට පත්  වාහනය කඩිනමින් මාර්ගයෙන් ඉවත් කර පොලිසියට වාර්තා කළ යුතුය";
    this.q2="වාහනයේ පිහිටීම මාර්ගය මත සලකුණු කර අනතුරට පත් පුද්ගලයන් රැගෙන යාම සඳහා වාහනය පාවිච්චි කළහැක";
    this.q3="අනතුරට පත් වාහනය පොලිස් නිලධාරියෙකු පැමිණෙන තෙක් ඉවත් නොකළ යුතුය";
    this.q4="හැකි විගස වාහනය මාර්ගයෙන් ඉවතට ගෙන එහි කාර්මික දෝෂ තිබේදැයි පරික්ෂා කළ යුතුය";
  }






else if(this.questionNo==16){
  this.imageHidden=true;
    this.question_head="රාත්‍රී කාලයේ දී ඔබ වාහනය සැමවිටම නතර කළ යුත්තේ";
    this.q1="රථ වාහන තදබදය අවම දිශාවට මුහුණ ලා ය";
    this.q2="රථවාහන ගමනාගමනයට ප්‍රතිවිරුද්ධ දිශාවට මුහුණලාය";
    this.q3="රථවාහන තදබදය අධික දිශාවට මුහුණ ලා ය";
    this.q4="රථවාහන ගමනාගමනයට ඇති ඇති දිශාවට මුහුණලා ය";
  }


else if(this.questionNo==17){
  this.imageHidden=true;
    this.question_head="ඔබට වම් පසින් වාහනයක් පසුකර යා හැක්කේ";
    this.q1="ඔබට ඉදිරියෙන් ධාවනය වන වාහනය දකුණට හරවන බවට සංඥා දක්වා ඇති අවස්තාවකදීය";
    this.q2="ඔබට ඉදිරියෙන් ධාවනය වන වාහන ඉතා අඩු වේගයකින් ධාවනය කරන අවස්ථාවකදීය";
    this.q3="දකුණු පසින් ඉස්සර කිරීම ආරක්ෂාකාරී නොවන බව ඔබට හැඟී යන අවස්ථාවකදී ය";
    this.q4="ඔබට ප්‍රතිවිරුද්ධ දිශාවෙන් ඉතා අධික වාහන තදබදයක් පවතින අවස්ථාවකදී ය";
  }


else if(this.questionNo==18){
  this.imageHidden=true;
    this.question_head="මත්පැන් හෝ මත්ද්‍රව්‍ය පාවිච්චි කර ඇති විට";
    this.q1="අනතුරක් වලක්වා ගැනීමට ගත වන කාලය කාලය වැඩි වේ";
    this.q2="අනතුරක් වලක්වා වලක්වා ගැනීමට ගත වන කාලය අඩුවේ";
    this.q3="අනතුර වළක්වා ගැනීම කෙරෙහි බලපෑමක් නැත";
    this.q4="අනතුරක් වැලැක්වීමට ඇති හැකියාව වැඩි කරයි";
  }


else if(this.questionNo==19){
  this.imageHidden=true;
    this.question_head="රථ වාහන නීති පිළිපදින විටදී ප්‍රමුඛත්වය දිය  යුතු නිවැරදි  ආකාරය වනුයේ කුමක්ද";
    this.q1="පොලිස් සංඥා, රථ වාහන ආලෝක සංඥා, මාර්ග සංඥා, මාර්ගය මත පිහිටුවන සලකුණු";
    this.q2="මාර්ගය මත පිහිට වෙන සංඥා, පොලිස් සංඥා, රථ වාහන ආලෝක සංඥා, මාර්ග සංඥා";
    this.q3="මාර්ග සංඥා, මාර්ගය මත පිහිට වන ඉරි, පොලිස් සංඥා,  රථ වාහන ආලෝක සංඥා";
    this.q4="රථ වාහන ආලෝක සංඥා, මාර්ග සංඥා, මාර්ගය මත පිහිට වන ඉරි, පොලිස් සංඥා";
  }
}
}
