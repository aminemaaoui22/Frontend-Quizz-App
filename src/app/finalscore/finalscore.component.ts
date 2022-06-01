import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finalscore',
  templateUrl: './finalscore.component.html',
  styleUrls: ['./finalscore.component.css']
})
export class FinalscoreComponent implements OnInit {

  classement!: any[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getLadderInfos();
  }

  getLadderInfos() {
    this.classement = this.route.snapshot.queryParams["classement"];
  }

}
