import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: '<router-outlet><spinner></spinner></router-outlet>'
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
