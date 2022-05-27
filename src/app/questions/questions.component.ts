import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../models/Question';
import { QuestionSocketService } from '../services/question-socket.service';
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


  constructor(
    private questionSocketService: QuestionSocketService,
    private route: ActivatedRoute
  ) {
    const idGameToJoin = this.route.snapshot.queryParams['GameToJoin'];
      console.log('mrgl')
      questionSocketService.question?.subscribe((qst) => {
        console.log("Question reçue: " + JSON.stringify(qst));
        this.question = qst;
        this.counter = qst.questionsNumber - qst.remainingQuestionsNumber
      })

  }


  ngOnInit(): void {
    // this.idGameToJoin = this.route.snapshot.queryParams['GameToJoin'];
    // console.log('el id l ma7noun= ' + this.idGameToJoin);
    // this.setGameId(this.idGameToJoin);
  }

}
