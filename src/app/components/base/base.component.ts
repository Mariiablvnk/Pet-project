import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit{
  breakpoint: number = 2;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 450) ? 1 : 2;
  }
  
  onResize(event: Event | null) {
    //@ts-ignore
    this.breakpoint = (event.target.innerWidth <= 450) ? 1 : 2;
  }
}
