import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  user_role: string | null = '';
  logged_in: boolean = false;

  constructor(private router:Router){}

  ngOnInit(): void { }

  ngDoCheck(){
    this.user_role = sessionStorage.getItem('role')
    this.user_role?.toLowerCase();
    const user_session_id = sessionStorage.getItem('user_session_id');
    if(user_session_id){
      this.logged_in = true;
    }
  }

  logout(){
    sessionStorage.removeItem('user_session_id');
    sessionStorage.removeItem('role');
    this.router.navigate(['./sign-in']);
    location.reload();
  }

}
