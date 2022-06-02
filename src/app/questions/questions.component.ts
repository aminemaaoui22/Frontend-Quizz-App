import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ladder, Question } from '../models/Question';
import { QuestionSocketService } from '../services/question-socket.service';
import { QuestionsService } from '../services/questions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  question?: Question;

  counter?: Number;

  idGameToJoin!: string;

  whithChoices: boolean = false;
  yesNo: boolean = false;
  withoutChoice: boolean = true;

  current_score: Number = 0;

  subscription?: Subscription = new Subscription() ;

  ladder?: Ladder;

  constructor(
    private questionSocketService: QuestionSocketService,
    private route: ActivatedRoute,
    private questionsService: QuestionsService,
    private router: Router,
  ) {
     const idGameToJoin = this.route.snapshot.queryParams['GameToJoin'];
       questionSocketService.question?.subscribe((qst) => {
        console.log("Question reçue: " + JSON.stringify(qst));
        this.question = qst;
       // console.log('type= ' + qst.type)
         if (qst.type == "WithChoices") {
           this.whithChoices = true;
           this.yesNo = false;
           this.withoutChoice = false;
         } else if (qst.type == "YesOrNo") {
           this.yesNo = true;
           this.whithChoices = false;
           this.withoutChoice = false;
         } else if (qst.type == "WithoutChoices") {
           this.withoutChoice = true;
           this.yesNo = false;
           this.whithChoices = false;
         }
         //this.questions.push(qst);
         this.counter = qst.questionsNumber.valueOf() - qst.remainingQuestionsNumber.valueOf()
       })

  }


  ngOnInit() {}
  
  checkAnswer(c: string) {
    console.log("check " + c);
    this.questionsService.checkAnswer(c).subscribe(
      {
        next: (data) => {
          this.current_score = this.current_score.valueOf() + data.gain.valueOf()
          if (!this.question?.isActive) {
            console.log("aaaaaaaaaaactiveeeee " + !this.question?.isActive)
            
            this.router.navigate(['/fin'], { queryParams: { classement: JSON.stringify( this.question?.ladder ) } })
          }
        }
      }
    )
  }

}
