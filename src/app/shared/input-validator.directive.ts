import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[inputValidator]'
})
export class inputValidatorDirective {
  constructor(private el: ElementRef) { }

  @HostListener('keypress') onkeypress() {
    console.log("keyPressed");
    
  }
}