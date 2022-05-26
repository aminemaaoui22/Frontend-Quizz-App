import { Component, OnInit } from '@angular/core';
import { QuestionSocketService } from '../services/question-socket.service';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  

  constructor(
    private questionSocketService: QuestionSocketService
  ) {
    console.log('hello');
    questionSocketService.question?.subscribe((qst) => {
      console.log('subscrrrrriiibe');
      console.log("Question reçue: " + JSON.stringify(qst));
    })
  }

  ngOnInit(): void {
    
  }

}
