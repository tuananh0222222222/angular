import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {
@Input() appHightLight = ''
  constructor(private el: ElementRef) { 
    console.log(this.appHightLight);
  }
  ngOnInit(): void {
    console.log(this.appHightLight);
    this.el.nativeElement.style.color= this.appHightLight
  }
}
