import { AfterContentInit, Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.css']
})
export class ProductWidgetComponent implements AfterContentInit {
  
  @Input() products:any;
  @ContentChild('head') head!:ElementRef;

  ngAfterContentInit(): void {
    console.log("heading content child "+this.head)
    console.log("heading content child "+this.head.nativeElement.textContent)
  }
}
