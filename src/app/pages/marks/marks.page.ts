import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sounds } from 'src/app/common/sounds';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.page.html',
  styleUrls: ['./marks.page.scss'],
})
export class MarksPage implements OnInit {
  marks:number=85;
  marks2:number=0
  actualmark:number=85;
  timer:any
  private correctAnswer=new Audio(String(Sounds.finish));

  constructor(
    private router:Router
  ) { }

  ngOnInit(

  )
  {
    this.correctAnswer.play();
    this.marks=Number(localStorage.getItem('marks'));
    this.actualmark=Number(localStorage.getItem('marks'));

    this.timer=setInterval(()=>{
      this.marks2++
      if(this.marks2>=this.actualmark){
        clearInterval(this.timer)
      }

    },20)
  }
  mainPage(){
    this.router.navigate(['home']);
  }
}
