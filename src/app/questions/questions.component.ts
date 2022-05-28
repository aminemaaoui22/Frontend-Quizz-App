import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../models/Question';
import { QuestionSocketService } from '../services/question-socket.service';
import { QuestionsService } from '../services/questions.service';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  question?: Question;

  counter?: number;

  idGameToJoin!: string;

  whithChoices: boolean = false;
  yesNo: boolean = false;
  withoutChoice: boolean = true;

  current_score: number = 0;




  constructor(
    private questionSocketService: QuestionSocketService,
    private route: ActivatedRoute,
    private questionsService: QuestionsService
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


  ngOnInit(): void {

  }

  checkAnswer(c: string) {
    console.log("check " + c);
    this.questionsService.checkAnswer(c).subscribe(
      {
        next: (data) => {
          this.current_score += data.gain
        }
      }
    )
  }

}
