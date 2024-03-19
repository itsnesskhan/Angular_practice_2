import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent {

  @ViewChild('heading') header!: ElementRef;


  ngAfterViewInit(): void {
    console.log("after header"+this.header)
    console.log("after header content : "+this.header.nativeElement.textContent)
  }
}
