import { Component, OnInit } from '@angular/core';

import { UserService } from "../user.service";

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  email:string='';
  msg:string='';
  display:boolean=false;

  constructor(public authService:UserService) { }

  ngOnInit() {
  }

  forgot(){
    let user = this.authService.forgot(this.email);
    user.
    then(value => {
      this.msg = value;
      this.display = true;
    })
    .catch(err => {
      console.log('Algo fue mal:',err.message);
      this.msg = err.message;
      this.display = true;
    });
  }

}
