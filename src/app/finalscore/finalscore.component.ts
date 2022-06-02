import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ladder } from '../models/Question';

@Component({
  selector: 'app-finalscore',
  templateUrl: './finalscore.component.html',
  styleUrls: ['./finalscore.component.css']
})
export class FinalscoreComponent implements OnInit {

  classement!: any[];

  subscription?: Subscription;
 
  ladder!: Ladder;
  
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getLadderInfos();
  }

  getLadderInfos() {
    this.classement = JSON.parse( this.route.snapshot.queryParams["classement"] ).elements;
    console.log(this.classement)
  }


}
