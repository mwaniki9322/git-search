import { Directive,ElementRef } from '@angular/core';
import {HostListener} from '@angular/core'
@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private elem:ElementRef) {}

  @HostListener("click") onClicks(){
    this.text("rgb(247, 84, 111")
  }

  private text(action:string){ 
    this.elem.nativeElement.style.color=action;
  }

}
