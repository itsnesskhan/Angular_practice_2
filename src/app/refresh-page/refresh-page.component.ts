import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'refresh-page',
  templateUrl: './refresh-page.component.html',
  styleUrls: ['./refresh-page.component.css']
})
export class RefreshPageComponent {


  constructor(private location:Location){

  }

  public refresh(){
    this.location.replaceState('/refresh');
    window.location.reload();
  }

}
