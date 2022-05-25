import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login!: string;
  password!: string;

  returnUrl!: string;


  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  handleLogin() {
      this.router.navigate([this.returnUrl]);
  }

}
