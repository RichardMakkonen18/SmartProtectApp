import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  isSeeMore: boolean = false;
  hobbies = ['Music', 'Sports', 'Photography', 'Singer', 'Actor'];
  constructor() { }

  ngOnInit() {
  }

  getColor(i:any){
    let colors = ["#ED93D5", "#94DAEC", "#FB6175", "#EFBCFF", "#F2D28A"];
    return colors[i];
  }

}
