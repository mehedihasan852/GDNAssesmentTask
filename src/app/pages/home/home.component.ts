import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login']);
  }
}
